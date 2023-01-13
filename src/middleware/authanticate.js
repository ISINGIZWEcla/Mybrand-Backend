import  veri  from "jsonwebtoken";
import user  from '../controllers/login.js'
const { verify } = veri




function authenticate(req,res,next){
    const authHeader = req.header('Authorization')
    let token ;


    if(authHeader) { 
        token = authHeader.split(' ')[1]
    }
    else{
    res.status(403).send({statusCode:'403',status:"fail",message:"you need to log in first"})
    }
    verify(token,process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user;
        // console.log(user)
        next()
    })
}


export default authenticate