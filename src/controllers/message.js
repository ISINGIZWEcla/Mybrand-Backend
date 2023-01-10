import {MessageService} from "../services/message.js";

export class MessageController {
    static async getAll(req, res){
        try {
            const messages = await MessageService.findAll()
            return res.json(messages)
        }catch (e) {
            return res.status(500).json({message:"something went wrong",error:e})
        }
    }
    static async addOne(req, res){
        const {names, email, message} = req.body
        const _comment = await MessageService
            .createMessage({
                names,
                email,
                message,
            })
        return res.status(201).json({message:"success",_comment})
    }
    static async findOne(req, res){
        try{
            const comment = await MessageService.findOne(req.params.id)
            return res.json(comment)
        }catch(e) {
            return res.status(404).json({message:"fail",error:"Comment doesn't exist"})
        }
    }
}