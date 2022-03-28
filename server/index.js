require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middleware/errorMiddleware')
const corsMiddleware = require('./middleware/corsMiddlewares')
const path = require ('path');
const fileUpload = require('express-fileupload')
const {Server}= require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 9000
const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {console.log('a user connected')})
io.on('disconnect', (socket) => {console.log('user disconnected')})

app.use(corsMiddleware)
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credential: true,
    origin: process.env.CLIENT_URL
    }
))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        await server.listen(PORT, ()=> console.log(`Server started on ${PORT}`))

    }catch(e){
        console.log(e.message)
    }
}

start()