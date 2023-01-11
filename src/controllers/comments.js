import {CommentService} from "../services/comments.js" ;

export class CommentController {
    static async getAllComments(req, res){
        try {
            const comments = await CommentService.findAll()
            return res.status(200).json({stauscode:'200',message:"success",data:comments})
        }catch (e) {
            return res.status(500).json({stauscode:'500',message:"something went wrong",error:e})
        }
    }
    static async addComment(req, res){
        const {names, email, comment, blogId} = req.body
        const _comment = await CommentService
            .createComment({
                names,
                email,
                comment,
                blogId
            })
        return res.status(201).json({stauscode:'201',message:"comment created",data:_comment})
    }
    static async findOne(req, res){
        try{
            const comment = await CommentService.findOneComment(req.params.id)
            return res.status(200).json({stauscode:'200',message:"success",data:comment})
        }catch(e) {
            return res.status(404).json({stauscode:'404',message:"fail",error:"Comment doesn't exist"})
        }
    }
}