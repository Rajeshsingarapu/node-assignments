const mongoose=require('mongoose')

const registerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    branch:{type:String,required:true},
    dob:{type:Number,required:true},
    password:{type:String,required:true},
    profilePicture:{type:String,required:true}
})
const registerModel=mongoose.model('register',registerSchema)
module.exports=registerModel