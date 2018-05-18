const app = require('./config/server')
const PORT = 3000

// Start Server
const server = app.listen(PORT, function () {
  console.log('Server running at port:', PORT)
})

const socketIO = require('socket.io').listen(server)
app.set('websocket', socketIO)

socketIO.on('connection', function (socket) {
  console.log('usuario conectado')

  socket.on('disconnect', function () {
    console.log('usuario desconectado')
  })

  socket.on('msgToServer', function (data) {
    socket.emit('msgToClient', {nickname: data.nickname, msg: data.msg})
    socket.broadcast.emit('msgToClient', {nickname: data.nickname, msg: data.msg})
  })
})
