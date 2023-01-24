import fs from "fs";
import path from "path";
import {BlogService} from "../services/blogs.js";
import {CommentService} from "../services/comments.js";
import {LikeServices} from "../services/likes.js";
import cloudinari from "../utils/cloudinary.js";
export class BlogController {
    static async findAllBlog(req, res){
        try {
            const blogs = await BlogService.findAllBlog();
            res.status(200).json({statuscode:'200',message:"success",data:{blogs}});
        }catch (error){
            return res.status(500).json({statuscode:'500',message:"something went wrong"})
        }
    }
    static async createBlog(req, res){
        try {
            // console.log("message", req.body)
            const {title, content, description} = req.body;
            const imageUrl = await cloudinari.uploadPhoto(req,res,req.files.image);
            // console.log("image url ----", imageUrl);
            const post = {
                title,
                content,
                description,
                image:imageUrl.url,
                created_on: new Date()
            }
            
            const blog = await BlogService.createBlog(post);
            res.status(201).json({statuscode:'201',message:"Blog created",data:blog});
        }catch (error){
            // console.log(error)
            return res.status(500).json({statuscode:'500',message:'fail',error:error.message})
        }
    }
    static async getBlog(req, res){
        try {
            let blog  = await BlogService.getBlog(req.params.id)
            const comments = await CommentService.findCommentByBlogId(req.params.id)
            let likes = await LikeServices.findLikesByBlogId(req.params.id)
            return res.json({message:"blog gotten successful", data:blog, comments,likes});
        } catch {
            return res.status(404).json({ error: "Blog doesn't exist!" });
        }
    }
    static async getRandom(req, res){
        try {
            const blogs = await BlogService.findAllBlog();
            let index = Math.floor(Math.random() * blogs.length)
            res.json(blogs[index]);
        }catch (error){
            return res.status(500).json({message:"something went wrong"})
        }
    }
    static async updateBlog(req, res){
        try {
            console.log("id---:: ", req.params.id)
            let post =await BlogService.getBlog(req.params.id)
            const {title, content, description} = req.body;
            const imageUrl = await cloudinari.uploadPhoto(req,res,req.files.image);
            // console.log("image url ----", imageUrl);
            const update = {
                title,
                content,
                description,
                image:imageUrl.url,
                created_on: new Date()
            }
            //console.log("Updates: ",update)
              //
           
            //console.log(req.body)
         
           
                post.title = update.title;
    
                post.description =update.description;
          
                post.image =update.image;
            
                post.content =update.content;
             
            
        //    // console.log("here is our post", post)
        //    post={...update};
           
        //    post.id=req.params.id;
           console.log("Post ..",post)
          
            await post.save();
            console.log(res.json({message: "updated successfully",post}))
            return res.status(200).json({stauscode:'200',message: "updated successfully",data:post});
        } catch {
            return res.status(404).json({statuscode:'404', message:"fail",error: "Blog doesn't exist!" });
        }
    }
    static async deleteBlog(req, res){
        try {
            await BlogService.deleteBlog(req.params.id);
            return res.status(204).json({stauscode:'204',message:"delete success"});
        } catch {
            return res.status(404).json({ statuscode:'404', message:"fail",error: "Blog doesn't exist!"});
        }
    }
    static async getAllComments(req, res){
        try{
            const comments = await CommentService.findCommentByBlogId(req.params.id)
            return res.status(200).json({stauscode:'200',message:"success",data:comments})
        }catch (error){
            return res.status(404).json({stauscode:'404',message:"fail",error: error})
        }

    }

}