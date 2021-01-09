const mongoose=require("mongoose")
const User=new mongoose.Schema({
    name:String,
    age:Number
})
const usermodel=mongoose.model("user",User)
module.exports={usermodel}