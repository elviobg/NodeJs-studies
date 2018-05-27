module.exports.game = function (app, req, res) {
  if (!req.session.authenticated) {
    res.render('index', {validation: [{ param: 'auth', msg: 'Usuário não autenticado', value: '' }], data: {}})
  }
  res.render('game')
}

module.exports.exit = function (app, req, res) {
  req.session.destroy(function (error) {
    res.render('index', {validation: {}, data: {}})
  })
}
