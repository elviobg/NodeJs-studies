module.exports.startChat = function (app, req, res) {
  const formData = req.body  

  req.assert('username', 'Username é obrigatorio').notEmpty()
  var errors = req.validationErrors()

  if (errors) {
    // console.log(errors)
    res.render('home/index', {validation: errors})
    return
  }

  const nickname = formData.username
  const websocket = app.get('websocket')
  var users = app.get('users')
  users.push(nickname)
  websocket.emit('msgToClient', {nickname: nickname, msg: 'Usuário conectado'})  

  res.render('chat/chat', {nickname: nickname, users: users})
}
