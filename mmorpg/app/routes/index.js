module.exports = function (app) {
  app.get('/', function (req, res) {
    app.app.controllers.home.index(app, req, res)
  })
  app.post('/auth', function (req, res) {
    app.app.controllers.home.auth(app, req, res)
  })
}
