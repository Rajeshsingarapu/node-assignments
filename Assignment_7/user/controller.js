const registerModel=require('./model')
const bcrypt=require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken');
const fs=require('fs')

const signupFun=async(req,res)=>{
    console.log("req.body",req.body)
    console.log("req.file",req.files,__dirname)
   try{
    let body=req.body
    if(!body.name){
        res.send({msg:"name is mandatory"})
    }else if(!body.email){
        res.send({msg:"email is mandatory"})
    }else if(!body.branch){
        res.send({msg:"branch is mandatory"})
    }else if(!body.dob){
        res.send({msg:"dob is mandatory"})
    }else if(!body.password){
        res.send({msg:"password is mandatory"})
    }else{
        let isDuplicate=await registerModel.findOne({email:body.email})
        if(isDuplicate){
            res.send({msg:"email exists"})
        }else if(!req.files||!req.files.profilePicture){
            res.send({msg:"please upload profile picture"})
        }
        else{
            console.log("before password",body.password)
            body.password=await bcrypt.hash(body.password, saltRounds)
            console.log("After password",body.password)
            let obj=req.body
            obj.profilePicture="photos/"+req.files.profilePicture.originalFilename
            
            fs.copyFileSync(req.files.profilePicture.path,__dirname+"/../photos/"+req.files.profilePicture.originalFilename)
             let createUser=await registerModel.create(obj)
            res.send({msg:"signup successfull",data:createUser})
        }
    }

   }catch(err){
    res.send({msg:"internal error",err:err})
   }
}

const loginFun=async(req,res)=>{
    try{
        let body=req.body
        if(!body.email){
            res.send({msg:"enter email"})
        }else if(!body.password){
            res.send({msg:"enter password"})
        }else{
            let userexists=await registerModel.findOne({email:body.email})
            console.log(userexists)//it return object with id,name,email,branch,dob,password
            if(!userexists){
                res.send({msg:"invalid credentials"})
            }else{
                let resp=await bcrypt.compare(body.password,userexists.password);
                console.log(resp)//it returns true
                if(!resp){
                    res.send({msg:"invalid credentials"})

                }else{
                     delete registerModel.password

                     let token=jwt.sign({
                        data:{_id:userexists._id,name:userexists.name}
                     },'rajesh123',{expiresIn:"1h"})
                     console.log(token)

                    res.send({msg:"login success",data:userexists,token:token})

                }

            }
        }


    }catch(err){
        res.send({msg:"internal error",err:err})
    }
}
const getProfileList=async(req,res)=>{
    try{
        console.log("reuser",req.jwt)
        let profile=await registerModel.find()
        res.send({msg:"user profile list",data:profile})

    }catch(err){
        res.send({msg:"internal error",err})
    }
}
const userProfile=async(req,res)=>{
    try{
        console.log("reuser",req.jwt)
        let userprofile=await registerModel.findOne({_id:req.jwt._id})
        res.send({msg:"user profile fetched ",data:userprofile})

    }catch(err){
        res.send({msg:"internal error",err})
    }
}
const uploadprofilepic=async (req,res)=>{
 try{
    

 }catch(err){

        res.send({msg:"internal error",err})

 }
}

 module.exports={
    signupFun,
    loginFun,
    getProfileList,
    userProfile

}