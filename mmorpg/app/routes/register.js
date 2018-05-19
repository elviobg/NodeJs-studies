module.exports = function (app) {
  app.get('/register', function (req, res) {
    app.app.controllers.register.register(app, req, res)
  })
}
