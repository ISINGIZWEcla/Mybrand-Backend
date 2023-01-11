import user from "../models/user.model.js" ;


const handleErrors=(err)=>{
  // console.log(err.message,err.code);
  let errors={
      names:'',
      email:'',
      password:'',
  }
  if(err.code===11000){
      errors.email=" that email is already registered"
  }

  if(err.message.includes("user validation failed")){
      Object.values(err.errors).forEach(({properties})=>{
          errors[properties.path]=properties.message
      })
  }
  return errors
}


export  async function usersget(req,res) {
  const users = await user.find()
  res.send({
    statusCode:'200',
    mesage:"success",
    data:users})
}

export  async function userget (req,res) {
  try{
      const auser = await user.findOne({ _id: req.params.id})
  res.send({
    statusCode:'200',
    mesage:"success",
    data:auser
})
  } catch{
      res.status(404)
      res.send({
        statusCode:'404',
        mesage:"fail",
        error: "user doesn't exist!"})
  }
}
export  async function userpost(req,res) {
  try{
      
  const auser = new user({
      names: req.body.names,
      email: req.body.email,
      password : req.body.password,
      role: req.body.role
      
  })
  await auser.save()
  res.status(201).json({
    statusCode:'201',
    mesage:"success",
    data:auser})
 }
 catch(err){
  const errors = handleErrors(err);
  res.status(400).json(errors)
 }
}

export async function userpatch(req,res){
  try{
      const auser = await user.findOne({_id: req.params.id})

      if(req.body.names){
          post.names= req.body.names
      }
      if(req.body.email){
          post.email = req.body.email
      }
      await auser.save()
      res.send(auser)
  }
  catch{
      res.status(404)
      res.send({error:"user doesn't exist!!"})
  }
}
export async function userdelete(req,res){
  try{
      await user.deleteOne({_id: req.params.id})
      return res.status(200).json({
        statusCode: '200',
        message:"delete success"});
  }
  catch{
    return res.status(404).json({
        statusCode: '404',
        message:"fail", 
        error: "User doesn't exist!"
         });
  }
}