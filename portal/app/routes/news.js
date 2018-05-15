module.exports = function (app) {
  app.get('/news', function (req, res) {
    app.app.controllers.news.carregar_noticias(app, req, res)
  })

  app.post('/news', function (req, res) {
    app.app.controllers.news.salvar_noticia(app, req, res)
  })
}
