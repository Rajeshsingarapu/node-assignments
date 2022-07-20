const express=require('express')
const router=express.Router()

const userList=[];

router.post("/create-user",(req,res)=>{
    let body=req.body
    if(!body){
        res.send({msg:"internal error"})
    }else{
        userList.push(body)
        res.send({msg:"user created successfull",data:userList})
        console.log(userList)
    }
})


router.get("/get-all-userlist",(req,res)=>{
    if(userList.length===0){
    res.send({msg:"internal error"})
    }else{
    res.send({msg:"all user are",data:userList})

    }
    
})

router.put("/update-user-details/:name",(req,res)=>{
    let pname=req.params.name
    console.log(pname)
    if(!pname){
        res.send({msg:"internal error"})
    }else{
        userList.forEach((item,index)=>{
            if(item.name===pname){
                item.pincode=555555
            }
        })
        res.send({msg:"updated successfull",data:userList})
    }

})

router.delete("/delete-user/:name",(req,res)=>{
    let pname=req.params.name
    if(!pname){
        res.send({msg:"internal error"})
    }else{
       userList.forEach((item,index)=>{
        if(item.name===pname){
            return userList.splice(index,1)
        }
       })
       res.send({msg:"deleted user successfully",data:userList})
    }

})

module.exports=router

