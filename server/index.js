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

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("db connected"))
    .catch((error)=>console.log(error))


//

//

