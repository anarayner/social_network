let users = []


const SocketServer = (socket) => {
    // Connect - Disconnect
    socket.on('addUser', user => {
        users.push({id: user._id, socketId: socket.id, followers: user.followers})
    })
    socket.on('disconnect', () => {

    })
}

module.exports = SocketServer
