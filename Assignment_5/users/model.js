const mongoose=require('mongoose')

    const userSchema=new mongoose.Schema({
        name:{type:String},
        email:{type:String},
        pincode:{type:Number},
        isActive:{type:Boolean}
    })
    
    const usersModel=mongoose.model('user',userSchema)


module.exports=usersModel