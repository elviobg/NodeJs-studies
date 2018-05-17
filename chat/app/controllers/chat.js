module.exports.startChat = function (app, req, res) {

  const formData = req.body
  const nickname = formData.username

  req.assert('username', 'Username é obrigatorio').notEmpty()

  var errors = req.validationErrors()
  if (errors) {
    // console.log(errors)
    res.render('home/index', {validation: errors})
    return
  }
  
  websocket = app.get('websocket')
  websocket.emit('msgToClient', {nickname: nickname, msg: 'Usuário conectado'})
  
  res.render('chat/chat')
}
