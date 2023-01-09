import login  from '../models/login.model.js'
import user from '../models/user.model.js'
import pkg from 'bcryptjs';
const {compare} = pkg;
import pkg1 from 'jsonwebtoken';
const {sign, verify} = pkg1;
import {} from 'dotenv/config'
import {promisify}  from 'util'

const handleErrors=(err)=>{
  // console.log(err.message,err.code);
  let errors={
      email:'',
      password:''
  }
  if(err.code===11000){
      errors.email=" that email is already registered"
  }

  if(err.message.includes("login validation failed")){
      Object.values(err.errors).forEach(({properties})=>{
          errors[properties.path]=properties.message
      
      })
  }
  return errors
}


export default async function loginpost (req,res) {
  //console.log('heloooooo')
  try{
      const uasers = await user.find()
      // console.log(uasers)
      const auser = uasers.find(user=>user.email===req.body.email)
      //console.log(auser)
      if(!auser){
          //return res.status(400).send("couldn't find the user")
          return res.status(400).json({
            statusCode: '400',
            status:'fail',
            message:"couldn't find the user"
        })
          
      }
      if (await compare(req.body.password, auser.password)){
          const useremail = req.body.email
          const userId = auser.id
          const useRole = auser.role
          const user = { email: useremail,id: userId,role:useRole}
          
          const accesstoken = sign(user, process.env.ACCESS_TOKEN_SECRET)
          return res.json({
            statusCode: '200',
            message:"successfully logged in",
            accesstoken:accesstoken,
            //user:user
          })

      }
      else{
          //return res.send("credentials doesn't match")
          res.status(401).json({
            statusCode: '401',
            status:'fail',
            message:"credentials doesn't match"
        })
      }
      // await auser.save()
 }
 catch(err){
  const errors = handleErrors(err);
  return res.status(400).json(errors);
 }

 
}

export  async function protect (req,res,next) {
  try {
    let token;
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
                 token=req.headers.authorization.split(' ')[1];
        }
        
             if(!token){
                res.status(401).json({
                    status:'fail',
                    message:'You are not logged in! please log in to get access'
                })
             }
            //verification token
          let decoded;
          try{
            decoded=await promisify(verify)(token,process.env.ACCESS_TOKEN_SECRET)
          }catch(err){
            return res.status(401).json({
                status:'fail',
                message:'invalid token,login to get one'
            })
           }
            //check if user still  exist
           const frestUser= await user.findById(decoded.id);
           if(!frestUser){
            return res.status(401).json({
                status:'fail',
                message:'token is no long accepted'
            })
           }

            return req.user = frestUser
            
    
    //let decoded=await promisify(jwt.verify)(token,process.env.secretKey)
  } catch (error) {
    return res.status(500).json({
      message:"server error",
      error:error.message,
      status:500
    })
  }
}

export  async function profile(req,res) {
  try {
    const users = await protect(req,res);
    const uasers = await user.findById(users._id)
      
    res.status(201).json({
      message:"user received",
      data:uasers
    })
  } catch (error) {
    return res.status(500).send({
      message:"server error",
      error:error.message,
      status:500
    })
  }
}
