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

const NEW_CHAT_MESSAGE_EVENT = 'NEW_CHAT_MESSAGE_EVENT';


let users = []
let conversation = []

const addUser = (id, socketId) =>{
    !users.some(user => user.id === id) &&
    users.push({id, socketId})
}

io.on('connection', socket => {
    console.log(`User connected`, socket.id)

    // listen fot new messages
    io.on(NEW_CHAT_MESSAGE_EVENT, data =>{
        io.emit(NEW_CHAT_MESSAGE_EVENT, data)
    })

    socket.on('addUser', userId =>{
        addUser(userId, socket.id)
        io.emit('getUsers', users)
    })
    socket.on('joinConversation', (id) =>{
        conversation.join(id)
        console.log(`User with ID: ${socket.id} joined the conv ${id}`)
    })
    // welcome current user
    socket.emit('message', 'welcome here')

    // listen for messages
    socket.on('sendMessage', data =>{
        console.log(data)
        io.emit('message', data)
        // io.to(data.conversation).emit('r_Message', data)
    })
    // disconnect user
    socket.on('disconnect', () => {
        io.emit('message', 'a user has left the chat')
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