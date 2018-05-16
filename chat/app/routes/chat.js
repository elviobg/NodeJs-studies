module.exports = function (app) {
  app.get('/chat', function (req, res) {
    app.app.controllers.chat.chat(app, req, res)
  })

  app.post('/chat', function (req, res) {
    app.app.controllers.chat.chat(app, req, res)
  })
}
