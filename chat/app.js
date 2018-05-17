const app = require('./config/server')
const PORT = 3000

// Start Server
const server = app.listen(PORT, function () {
  console.log('Server running at port:', PORT)
})

require('socket.io').listen(server)
