import mongoose from "mongoose"
import pkg from 'bcryptjs';
const {genSalt, hash} = pkg;
const Schema = mongoose.Schema;



const user_schema = Schema({
	names: {
					type:String,
					required:[true,'please enter Your Names'],
					minlength:[6,'minimum length is 6 characters']
	},

	email:{
					type:String,
					unique:true,
					required:[true,'please enter an email'],
					minlength:[6,'minimum length is 6 characters'],
					
	},
	password:{
					type:String,
					required:[true,'please enter a password'],
					minlength:[6,'minimum length is 6 characters']
	},
	role:{
					type:String,
					default:"user"
	}

})

user_schema.pre('save',async function(next){
	const salt = await genSalt()
	this.password = await hash(this.password,salt)
	next();
})

	

export default mongoose.model("userModel",user_schema )
