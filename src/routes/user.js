import Router  from "express"
//import {authrize} from ('../middleware/authorize.js')
import  { usersget, userget, userpost, userpatch, userdelete }  from "../controllers/users.js"
import AuthValidation  from "../validation/SignupValidation.js"
import authrole from '../middleware/authorizerole.js'
import authenticate  from '../middleware/authanticate.js'
const users = Router()

users.get("/users", authenticate,authrole ,usersget) 
users.get("/users/:id", authenticate,authrole, userget)
users.post("/add-users", userpost)
users.delete("/del-user/:id", authenticate,authrole, userdelete)

export default users;