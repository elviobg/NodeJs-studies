const app = require('./config/server')
const PORT = 3000

app.listen(PORT, function () {
  console.log('Server running at port:', PORT)
})