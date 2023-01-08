import express  from "express";
import multer  from "multer";
import {BlogController}  from "../controllers/blogs.js";
import authrole from '../middleware/authorizerole.js'
import authenticate  from '../middleware/authanticate.js'
import { LikeController } from "../controllers/likes.js";


const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

router.get("/get-blogs", BlogController.findAllBlog);

router.post("/add-blog",authenticate,authrole, BlogController.createBlog);

router.get("/get-blog/:id",authenticate, BlogController.getBlog);

router.patch("/blog/:id",authenticate,authrole,BlogController.updateBlog);

router.delete("/del-blog/:id",authenticate,authrole, BlogController.deleteBlog);
router.get("/blog/:id/comments",BlogController.getAllComments)
router.get("/blog/:id/likes", LikeController.countLike)
export default router;