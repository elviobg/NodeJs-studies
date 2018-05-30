module.exports.game = function (app, req, res) {
  console.log('auth: ', req.session.authenticated)
  if (!req.session.authenticated) {
    res.render('index', {validation: [{ param: 'auth', msg: 'Usuário não autenticado', value: '' }], data: {}})
    return
  }
  const connection = app.config.databaseConnection
  const gameDAO = new app.app.models.GameDAO(connection)

  var message = {}
  if (req.query.actionresult !== undefined) {
    if (req.query.actionresult === 'invalidcommand') {
      message = { param: 'invalidcommand', msg: 'Operação inválida, verifique se todos os campos foram preenchidos', value: '' }
    }
    if (req.query.actionresult === 'sucess') {
      message = { param: 'sucess', msg: 'Ação realizada com sucesso!', value: '' }
    }
    if (req.query.actionresult === 'revoke') {
      message = { param: 'revoke', msg: 'Uma tarefa foi revogada', value: '' }
    }
    if (req.query.actionresult === 'actionfinished') {
      message = { param: 'actionfinished', msg: 'Uma tarefa foi concluida', value: '' }
    }
  }

  gameDAO.getUserStats(req.session.user, function (err, result) {
    if (err) { throw err }
    const game = result[0]
    res.render('game', {house: req.session.house, game: game, message: message})
  })
}

module.exports.exit = function (app, req, res) {
  req.session.destroy(function (error) {
    if (error) { throw error }
    res.render('index', {validation: {}, data: {}})
  })
}

module.exports.vassal = function (app, req, res) {
  if (!req.session.authenticated) {    
    res.send('Usuário não autenticado')
    return
  }
  res.render('workers')
}

module.exports.parchment = function (app, req, res) {
  if (!req.session.authenticated) {    
    res.send('Usuário não autenticado')
    return
  }

  const connection = app.config.databaseConnection
  const gameDAO = new app.app.models.GameDAO(connection)
  gameDAO.getActions(req.session.user, function (err, result) {
    if (err) { throw err }
    res.render('parchment', {actions: result})
  })
}

module.exports.order = function (app, req, res) {
  if (!req.session.authenticated) {
    res.render('index', {validation: [{ param: 'auth', msg: 'Usuário não autenticado', value: '' }], data: {}})
    return
  }

  const dataForm = req.body
  req.assert('action', 'A ação deve ser informada').notEmpty()
  req.assert('quantity', 'A quantidade deve ser informada').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    res.redirect('game?actionresult=invalidcommand')
    return
  }

  const connection = app.config.databaseConnection
  const gameDAO = new app.app.models.GameDAO(connection)
  gameDAO.vassalAction(dataForm, req.session.user, function (err, result) {
    if (err) { throw err }
    gameDAO.updateCoins(dataForm, req.session.user, function (err, result) {
      if (err) { throw err }
      res.redirect('game?actionresult=sucess')
    })
  })
}

module.exports.revokeOrder = function (app, req, res) {
  const query = req.query;  
  const connection = app.config.databaseConnection
  const gameDAO = new app.app.models.GameDAO(connection)

  gameDAO.removeAction(req.query.id, function (err, result) {
    if (err) { throw err }
    res.redirect('game?actionresult=revoke')
  })  
}
