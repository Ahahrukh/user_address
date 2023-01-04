const express=require('express')
const userModel = require('../model/user.model')

const userRouter=express.Router()


userRouter.post("/register",async(req,res)=>{
    let {name,address}=req.body
    let usermodel=new userModel({name,address})
    await usermodel.save()
    res.send({"message":"Registred succusefully"})
})

module.exports=userRouter