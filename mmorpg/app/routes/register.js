module.exports = function (app) {
  app.get('/register', function (req, res) {
    app.app.controllers.register.register(app, req, res)
  })
  
  app.post('/register', function (req, res) {
    app.app.controllers.register.registerUser(app, req, res)
  })
}
