import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

import dotenv from 'dotenv'


const app = express()
app.use(bodyParser.json({ limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}))
app.use(cors())
dotenv.config()




// basic route or home route
app.get('/',(req,res)=>{
    res.send("Hello there i am index.js of server side")
  })

app.use('/api/v1/posts',postRoutes)
app.use('/api/v1/user',userRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("Running server");
})

mongoose.connect('mongodb+srv://saideepdata30:ULf1cqii6gdpfGvp@cluster0.xjabl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("db connected"))
    .catch((error)=>console.log(error))


//mongodb+srv://saideepdata30:ULf1cqii6gdpfGvp@cluster0.xjabl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//process.env.CONNECTION_URL

