const productModel = require("./model");

const createProduct = (req, res) => {
  let body = req.body;
  console.log('my body from frientend',body)
  productModel.create(body).then((susResp)=>{
    console.log('success resp',susResp)
    res.status(200).send({status:true,msg:'product created successfully',data:susResp})

  }).catch((err)=>{
    console.log('internal err',err)
    res.status(500).send({status:false,msg:"internal server error",err:err})


  })
}
const createProductAsync=async(req,res)=>{
  let body = req.body;
  try{
    let result=await productModel.create(body)
    res.status(200).send({status:true,msg:'product created successfully',data:result})


  }catch(err){
    console.log('internal err',err)
    res.status(500).send({status:false,msg:"internal server error",err:err})

  }
}

  const getAllProducts=(req,res)=>{

    productModel.find().then((sucResp)=>{
    res.status(200).send({status:true,msg:'All products fetched successfully',data:sucResp})

    }).catch((err)=>{
    res.status(500).send({status:false,msg:"internal server error",err:err})

    })

  }

  const getAllProductsAsync=async(req,res)=>{
    try{
      let result=await productModel.find()
      res.status(200).send({status:true,msg:'All products fetched successfully',data:result})

    }
    catch(err){
    res.status(500).send({status:false,msg:"internal server error",err:err})
      
    }
  }

 

  
  
  const getProduct=(req,res)=>{
    
    productModel.find({_id:req.params._id}).then((sucResp)=>{
    res.status(200).send({status:true,msg:' product fetched successfully',data:sucResp})
    }).catch((err)=>{
    res.status(500).send({status:false,msg:"internal server error",err:err})

    })
  }

  const getProductAsync=async(req,res)=>{
    try{
        let result=await productModel.find({_id:req.params._id})
        res.status(200).send({status:true,msg:' product fetched successfully',data:result})

    }catch(err){
    res.status(500).send({status:false,msg:"internal server error",err:err})

    }
  }

  const deleteProduct=(req,res)=>{
    productModel.remove(({_id:req.params._id})).then((sucResp)=>{
    res.status(200).send({status:true,msg:' product removed successfully',data:sucResp})

    }).catch((err)=>{
    res.status(500).send({status:false,msg:"internal server error",err:err})

    })
  }

  const deleteProductAsync=async(req,res)=>{
    try{
     let result=await productModel.remove({_id:req.params._id})
    res.status(200).send({status:true,msg:' product removed successfully',data:result})
    }catch(err){
    res.status(500).send({status:false,msg:"internal server error",err:err})

    }
  }

  const updateProduct=(req,res)=>{
    productModel.updateOne({_id:req.params._id},{
      $set:{
          name:req.body.name,
          price:req.body.price,
          size:req.body.size,
          color:req.body.color
      }}).then((sucResp)=>{
    res.status(200).send({status:true,msg:' product  successfully',data:sucResp})

      }).catch((err)=>{
    res.status(500).send({status:false,msg:"internal server error",err:err})

      })
  }

  const updateProductAsync=async(req,res)=>{
    try{
      let result=await productModel.updateOne({_id:req.params._id},{
        $set:{
            name:req.body.name,
            price:req.body.price,
            size:req.body.size,
            color:req.body.color
        }})
    res.status(200).send({status:true,msg:' product  successfully',data:result})


    }catch(err){
    res.status(500).send({status:false,msg:"internal server error",err:err})


    }
  }
    
   



module.exports={
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductAsync,
  getAllProductsAsync,
  getProductAsync,
  deleteProductAsync,
  updateProductAsync
}
