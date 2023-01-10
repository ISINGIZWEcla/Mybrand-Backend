import {CommentService} from "../services/comments.js" ;

export class CommentController {
    static async getAllComments(req, res){
        try {
            const comments = await CommentService.findAll()
            return res.json(comments)
        }catch (e) {
            return res.status(500).json({message:"something went wrong",error:e})
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
        return res.status(201).json(_comment)
    }
    static async findOne(req, res){
        try{
            const comment = await CommentService.findOneComment(req.params.id)
            return res.json(comment)
        }catch(e) {
            return res.status(404).json({error:"Comment doesn't exist"})
        }
    }
}