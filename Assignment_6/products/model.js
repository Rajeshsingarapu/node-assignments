const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    price:{type:Number},
    size:{type:Number},
    color:{type:String}
})
const productModel=mongoose.model('products',productSchema);
module.exports=productModel