module.exports.register = function (app, req, res) {
  res.render('register', {validation: {}, data: {}})
}

module.exports.registerUser = function (app, req, res) {
  const dataForm = req.body
  req.assert('name', 'Nome é obrigatorio').notEmpty()
  req.assert('user', 'Usuário é obrigatorio').notEmpty()
  req.assert('key', 'Senha é obrigatoria').notEmpty()
  req.assert('house', 'Casa é obrigatoria').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    res.render('register', {validation: errors, data: dataForm})
    return
  }

  const connection = app.config.databaseConnection
  const usersDAO = new app.app.models.UsersDAO(connection)

  usersDAO.authenticateUser(dataForm, function (err, result) {
    if (err) { throw err }
    if (result.length > 0) {
      delete dataForm['key']
      res.render('register', {validation: [{ param: 'auth', msg: 'Login indisponivel', value: '' }], data: dataForm})
    } else {
      usersDAO.createNewUser(dataForm, function (err, result) {
        if (err) { throw err }
        req.session.authenticated = true
        req.session.user = dataForm.user
        req.session.house = dataForm.house
        const gameDAO = new app.app.models.GameDAO(connection)
        gameDAO.createNewStats(dataForm.user, function (err, result) {
          if (err) { throw err }
          var game = result['ops'][0]
          res.render('game', {house: req.session.house, game: game, message: { param: 'sucess', msg: 'Seja bem-vindo ao Jogo dos Tronos!', value: '' }})
        })
      })
    }
  })
}
