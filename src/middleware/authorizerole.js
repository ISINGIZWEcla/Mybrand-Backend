import user from "../controllers/login.js"

function authrole(req,res,next){
      //   console.log("you got here")
        if(req.user.role!=="admin"){
           res.status(401).send({statusCode:'401',status:"fail",message:"you are not allowed,only for admins"})
           return
        }
        next()
    }
    export default authrole