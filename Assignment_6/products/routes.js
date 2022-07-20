const express=require('express')
const routes=express.Router()
const productService=require('./service')

routes.post('/create-product',productService.createProduct);
routes.post('/create-product-async',productService.createProductAsync);

routes.get('/get-all-products',productService.getAllProducts);
routes.get('/get-all-products-async',productService.getAllProductsAsync);

routes.get('/get-one-product/:_id',productService.getProduct);
routes.get('/get-one-product-async/:_id',productService.getProductAsync);

routes.delete('/delete-one-product/:_id',productService.deleteProduct);
routes.delete('/delete-one-product-async/:_id',productService.deleteProductAsync);

routes.put('/update-product/:_id',productService.updateProduct);
routes.put('/update-product-async/:_id',productService.updateProductAsync);



//  create, update, get all products ,get single product and delete product by usin

module.exports=routes;