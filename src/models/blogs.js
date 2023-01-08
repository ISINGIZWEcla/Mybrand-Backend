import mongoose from"mongoose" ;

const schema = mongoose.Schema({
  title: String,
  description: String,
  content:String,
  image: String,
  created_on:{type:Date, default:new Date()}
});


export default mongoose.model("Blog",schema)