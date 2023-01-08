import express  from "express" ;
import {CommentController}  from "../controllers/comments.js";
import commentValidation  from "../validation/CommentValidation.js" ;
import authenticate  from '../middleware/authanticate.js'
const router = express.Router()

router.get('/comments',  CommentController.getAllComments)

router.post('/comment',authenticate,commentValidation, CommentController.addComment)

router.get("/comment/:id", CommentController.findOne)

export default  router