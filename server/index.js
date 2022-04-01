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


const PORT = process.env.PORT || 9000

const app = express()

// Socket
const socketio = require("socket.io");
const http = require('http')
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});


app.use(corsMiddleware)
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credential: true,
    origin: process.env.CLIENT_URL
    }))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorMiddleware)

const users = [];

const addUser = (id, socketId) =>{
    !users.some(user => user.id === id) &&
    users.push({id, socketId})
}

const getUser = (id) =>{
    return users.find(user => user.id === id)
}

io.on('connection', (socket) =>{
    console.log('connected')

    //all connected users
    socket.on('connectUser', userId =>{
        addUser(userId, socket.id)
    })
    console.log(users)

    //send message
    socket.on('send_message', ({senderId, receiverId, content, createdAt})=>{
        console.log(users)
        const user = getUser(receiverId)
        console.log(user)
        io.to(user.socketId).emit('receive_message', {
            senderId,
            receiverId,
            content,
        })
    })


    // all users events
    socket.emit("users", users);

    socket.on('disconnect', () => {
        console.log( 'a user has left the chat')
    });
})

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