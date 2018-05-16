module.exports.startChat = function (app, req, res) {
  req.assert('username', 'Username é obrigatorio').notEmpty()

  var errors = req.validationErrors()
  if (errors) {
    // console.log(errors)
    res.render('home/index', {validation: errors})
    return
  }

  res.render('chat/chat')
}
