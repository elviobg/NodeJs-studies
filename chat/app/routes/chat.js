module.exports = function (app) {
  app.get('/chat', function (req, res) {
    app.app.controllers.chat.startChat(app, req, res)
  })

  app.post('/chat', function (req, res) {
    app.app.controllers.chat.startChat(app, req, res)
  })
}
