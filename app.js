const express=require("express")
const app=express()
const mongoose=require("mongoose")


require("dotenv/config")
mongoose.connect(process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true ,useNewUrlParser:true},
).then(()=>{
    console.log("connected to database")
}).catch((err)=>console.log(err))
    app.listen(3001,()=>console.log("port is listening 3001"))
    
const {usermodel}=require("./model/user")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hii")
})
app.post("/user1",async(req,res)=>{
       try{
        const myuser=new usermodel(req.body)
        await myuser.save()
        res.send(myuser)
       }catch(err){
console.log(err)
    }
   
})

