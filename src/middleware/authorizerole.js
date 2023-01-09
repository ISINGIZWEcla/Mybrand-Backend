import user from "../controllers/login.js"

function authrole(req,res,next){
      //   console.log("you got here")
        if(req.user.role!=="admin"){
           res.status(401).send("not allowed")
           return
        }
        next()
    }
    export default authrole