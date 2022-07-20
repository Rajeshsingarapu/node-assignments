const express=require('express')
const router=express.Router()
const userServices=require('./controller')

router.post('/create-user',userServices.createuser);
router.get('/getUsersList',userServices.getUsersList)
router.delete('/deleteuser/:_id',userServices.deleteusers)
router.put('/edit-userList/:_id',userServices.updateuser)
module.exports=router;



