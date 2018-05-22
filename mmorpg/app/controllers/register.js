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
  usersDAO.createNewUser(dataForm, res.send('usuario criado'))
}
