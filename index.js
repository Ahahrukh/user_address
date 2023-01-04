const express=require("express")
const connection=require('./config/connection')
const userRouter = require("./routes/user.route")

let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home")
})
app.use("/user",userRouter)
app.listen(4000,async()=>{
    try{
       await connection
       console.log("connected")
    }catch(err){
        console.log(err)
    }
    console.log("connected with 4000")
})