const userModel= require("./model")


const createuser=(req,res)=>{
    let body=req.body
    console.log('my body from frientend',body)
    userModel.create(body,(err,susResp)=>{
        if(err){
            res.status(500).send({status:false,msg:"internal server error",err:err})
        }else{
            res.status(200).send({status:true,msg:'user created successfully',data:susResp})
        }
    })
    
}

const getUsersList=(req,res)=>{
    let condition={}
    if(req.query.city){
        condition.city=req.query.city

    }
    userModel.find(condition,(err,susResp)=>{
        if(err){
            res.status(500).send({status:false,msg:"internal server error",err:err})
        }else{
            res.status(200).send({status:true,msg:'successfully usersList',data:susResp})
        } 
    })
}

const deleteusers=(req,res)=>{
    userModel.remove({_id:req.params._id},(err,susResp)=>{
        if(err){
            res.status(500).send({status:false,msg:"internal server error",err:err})
            
        }else{
            res.status(200).send({status:true,msg:"successfully deleted",data:susResp})
        }
    })
}

const updateuser=(req,res)=>{
    userModel.updateOne({_id:req.params._id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            pincode:req.body.pincode,
            isActive:req.body.isActive
        }},(err,susResp)=>{
            if(err){
                res.status(500).send({status:false,msg:"internal server error",err:err})
                
            }else{
                res.status(200).send({status:true,msg:"successfully updated",data:susResp})
            }

        })
}

module.exports={
    createuser,
    getUsersList,
    deleteusers,
    updateuser

    
}

