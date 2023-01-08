import {LikeServices} from "../services/likes.js";
import {UserServices} from "../services/user.js" ;

export class LikeController {
    static async countLike(req, res){
        try {
            let blogId = req.params.id;
            let like = await LikeServices.findLikesByBlogId(blogId)

            return res.status(200).json({message:"Likes count",count:like.count})
        }catch (e) {
            res.status(404)
            return res.json({ error: e || 'something went wrong' });
        }
    }
    static async like(req, res){
        try {
            const {blogId, userId} = req.body
            let like = await LikeServices.findLikesByBlogId(blogId)
            let user = await UserServices.findUserId(userId)
            if(!user){
                return res.status(401).json({message:"user not found"});
            
            }
            if(!like){
                like = LikeServices.createLike({
                    blogId,
                    count: 1,
                    lovers:[user._id]
                })
            }else {
                let alreadyLike = await like.lovers.find(each => String(each) ===String(user._id) );
                if(alreadyLike){
                    res.send({message:'You already liked this post'})
                    return
                }else {
                    like.count = like.count + 1
                    like.lovers = [...like.lovers, user._id]

                    await like.save()
                }
            }
            return res.json({message:"you liked this post",data:{...like}})
        }catch (error) {
            res.status(404)
            res.send({ error: error || 'something went wrong' });
        }
    }
    static async unLike(req, res){
        try {
            const {blogId, userId} = req.body
            let like = await LikeServices.findLikesByBlogId(blogId)
            let user = await UserServices.findUserId(userId)
            if(!user || !like){
                return res.status(401).json({error:"user doesn't liked the blog"})
            }
            else {
                let alreadyLike = await like.lovers.find(each => String(each) ===String(user._id) );
                if(alreadyLike){
                    like.count = like.count - 1
                    like.lovers = like.lovers.filter( each => String(each) !==String(user._id))

                    await like.save()

                }else {
                    return res.json({message:'user did not like the blog'})
                }
            }
            return res.json(like)
        }catch (error) {
            return res.status(500).json({ error: error || 'something went wrong' });
        }
    }
}