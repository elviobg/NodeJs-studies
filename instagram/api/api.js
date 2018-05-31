const api = require('./config/server')
const PORT = 3000

api.listen(PORT, function () {
  console.log('Server running at port:', PORT)
})