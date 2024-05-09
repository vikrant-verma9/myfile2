import express from "express"
import mongoose from "mongoose"

const app = express()

app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT=process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`)
})
const DB_URL = "mongodb+srv://<abc>:9044607960An@cluster0.yag7mys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})