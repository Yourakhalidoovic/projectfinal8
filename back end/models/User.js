import mongoose from "mongoose";
const newshema = new mongoose.Schema({
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}





});
const user = mongoose.model("user", newshema);
export default user;
