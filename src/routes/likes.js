import express  from "express";
import {LikeController}  from "../controllers/likes.js";
import likeValidation  from "../validation/LikeValidation.js";
import authenticate  from '../middleware/authanticate.js'

const router = express.Router();

router.patch("/like",authenticate,likeValidation, LikeController.like)
router.patch('/unlike',authenticate,likeValidation, LikeController.unLike)

export default router;