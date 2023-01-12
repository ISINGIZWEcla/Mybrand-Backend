import express from "express"
import  bodyParser  from "body-parser";
//import blogRouter  from './routes/blog.js'
import userRouter from './routes/user.js'
import loginRoute from './routes/login.js'
//import auth  from './middleware/authorize.js'
import blogsRoute  from './routes/blogs.js' ;
import commentsRoute  from "./routes/comments.js";
import messageRoute from "./routes/message.js"
import LikesRoute  from "./routes/likes.js" ;
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './docs/index.js';
import fileUpload from "express-fileupload"
import 'dotenv/config'

import mongoose from "mongoose" 
mongoose.set('strictQuery', true)
mongoose
	.connect("mongodb+srv://Clarisse:Isingizwe22@cluster0.qxd2jzf.mongodb.net/myBrand", { useNewUrlParser: true })
	//.connect("mongodb://127.0.0.1:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		console.log('Database connected successfully')
	}).catch((err)=>{
		console.log('Error in connecting Database')
	})
	const app = express()
	app.use(fileUpload(
    {
        useTempFiles: true
    }
));
	app.use(bodyParser.json())
	app.use(express.json())
	app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions))
	app.use("/api", loginRoute)
	//app.use("/api", blogRouter)
	app.use("/api", userRouter)
	app.use("/api", blogsRoute)
  app.use("/api", commentsRoute)
  app.use("/api", LikesRoute)
	app.use("/api", messageRoute)
	app.get('/',(req,res)=>{
		res.status(200).send({message:"welcome to backend"})
	})
	
		app.listen(5000, () => {
			console.log("Server has started!")
		})

export default app

