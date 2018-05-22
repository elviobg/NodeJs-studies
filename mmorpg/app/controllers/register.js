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
    // console.log(errors)
    res.render('register', {validation: errors, data: dataForm})
    return
  }
  
  res.render('register', {validation: {}, data: {}})
}
