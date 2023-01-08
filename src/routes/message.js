import express from "express";
import {MessageController} from "../controllers/message.js";
import messageValidation from "../validation/Messagevalidation.js";
import authrole from '../middleware/authorizerole.js'
import authenticate  from '../middleware/authanticate.js'
const router = express.Router()
router.get('/messages',authenticate,authrole,  MessageController.getAll)

router.post('/message',messageValidation, MessageController.addOne)

router.get("/message/:id",authenticate,authrole, MessageController.findOne)

export default router