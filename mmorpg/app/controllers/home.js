module.exports.index = function (app, req, res) {
  res.render('index', {validation: {}, data: {}})
}

module.exports.auth = function (app, req, res) {
  const dataForm = req.body

  console.log('auth:' + req.session.authenticated)
  req.assert('user', 'Usuário é obrigatorio').notEmpty()
  req.assert('key', 'Senha é obrigatoria').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    console.log(errors)
    res.render('index', {validation: errors, data: dataForm})
    return
  }

  const connection = app.config.databaseConnection
  const userDAO = new app.app.models.UsersDAO(connection)
  userDAO.authenticateUser(dataForm, function (err, result) {
    if (err) { throw err }
    if (result.length > 0) {
      req.session.authenticated = true
      req.session.user = result[0].user
      req.session.house = result[0].house
      res.redirect('game')
    } else {
      res.render('index', {validation: [{ param: 'auth', msg: 'Usuário/Senha não confere', value: '' }], data: dataForm})
    }
  })
}
