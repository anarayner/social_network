import {io} from 'socket.io-client'
const URL = 'http://localhost:7000'
const socket = io(URL, )

// socket.onAny((event, ...args)=>{
//     console.log(event, ...args)
// })
socket.on('users', users => {
    console.log(users)
})

export  default socket