import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv/config'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 9000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const start = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        await app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))

    }catch(e){
        console.log(e.message)
    }
}

start()