module.exports.game = function (app, req, res) {  
  if( !req.session.authenticated ) {
    res.send('usuario não autenticado')
  }
  res.render('game')
}
