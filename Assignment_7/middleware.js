const jwt = require('jsonwebtoken');

const authmiddleware=(req,res,next)=>{
    try{
        let token=req.headers["token"]
        console.log(token)
        if(!token){
            res.send("token not found")
        }
        else{
            let mydata=jwt.verify(token,'rajesh123')
            req.jwt=mydata
            next()
        }
    }catch(err){
        console.log("error",err)
        res.send("invalid token")

    }
}
module.exports= authmiddleware