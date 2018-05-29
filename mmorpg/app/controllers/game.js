module.exports.game = function (app, req, res) {
  if (!req.session.authenticated) {
    res.render('index', {validation: [{ param: 'auth', msg: 'Usuário não autenticado', value: '' }], data: {}})
  }
  const connection = app.config.databaseConnection
  const gameDAO = new app.app.models.GameDAO(connection)
  
  gameDAO.getUserStats(req.session.user, function (err, result) {
    if (err) { throw err } 
    var game = result[0]
    delete game['_id']
    res.render('game', {house: req.session.house, game: game})
  })
}

module.exports.exit = function (app, req, res) {
  req.session.destroy(function (error) {
    res.render('index', {validation: {}, data: {}})
  })
}

module.exports.vassal = function (app, req, res) {
  req.session.destroy(function (error) {
    res.render('workers', {validation: {}, data: {}})
  })
}

module.exports.parchment = function (app, req, res) {
  req.session.destroy(function (error) {
    res.render('parchment', {validation: {}, data: {}})
  })
}