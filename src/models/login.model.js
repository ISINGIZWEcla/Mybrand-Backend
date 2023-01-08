import mongoose from "mongoose"
const Schema = mongoose.Schema;

const login_schema = Schema({
  email:{
      type:String,
      required:[true,'please enter an email'],
      minlength:[6,'minimum length is 6 characters'],
      
},
password:{
      type:String,
      required:[true,'please enter a password'],
      minlength:[6,'minimum length is 6 characters']
},
browserId:{
      type:String
 }
 
})




export default mongoose.model("loginModel",login_schema ) 