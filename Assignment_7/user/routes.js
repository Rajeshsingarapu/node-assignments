const express=require('express')
const routes=express.Router()
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const userService=require('./controller')
const authmiddleware=require('./../middleware')

routes.post('/signup',multipartMiddleware,userService.signupFun)
routes.post('/login',userService.loginFun)
routes.get('/get-profile-list',authmiddleware,userService.getProfileList)
routes.get('/user-profile',authmiddleware,userService.userProfile)

module.exports=routes