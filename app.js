const express=require("express")
const app=express()
const mongoose=require("mongoose")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hii")
})
app.post("/user1",(req,res)=>{
    
    res.send(`creted your user ${req.body.name}`)
})

mongoose.connect("mongodb+srv://pareshmore:manchestor@123@cluster0.lhs8e.mongodb.net/<dbname>?retryWrites=true&w=majority",
{useUnifieldTopology:true,useNewUrlParser:true},
(req,res)=>{
    console.log("connected to database")
})
app.listen(3001,()=>console.log("port is listening"))
