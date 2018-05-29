module.exports = function (app) {
  app.get('/game', function (req, res) {
    app.app.controllers.game.game(app, req, res)
  })
  app.get('/exit', function (req, res) {
    app.app.controllers.game.exit(app, req, res)
  })
  app.get('/vassal', function (req, res) {
    app.app.controllers.game.vassal(app, req, res)
  })
  app.get('/parchment', function (req, res) {
    app.app.controllers.game.parchment(app, req, res)
  })
}
