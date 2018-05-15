module.exports = function (app) {
  app.get('/news', function (req, res) {
    const connection = app.config.databaseConnection()
    const newsModel = new app.app.models.NewsModel(connection)

    newsModel.getNews(connection, function (error, result) {
      if (error === null) {
        // console.log(result)
        res.render('news/news', {news: result})
      } else {
        console.log(error)
      }
    })
  })

  app.post('/news', function (req, res) {
    const news = req.body

    req.assert('title', 'Titulo é obrigatorio').notEmpty()
    req.assert('abstract', 'Resumo é obrigatorio').notEmpty()
    req.assert('author', 'Autor é obrigatorio').notEmpty()
    req.assert('news_date', 'Data é obrigatoria').notEmpty()
    req.assert('report', 'Noticia é obrigatoria').notEmpty()
    req.assert('abstract', 'Resumo deve conter enter 10 e 100 caracteres').len(10, 100)

    var errors = req.validationErrors()
    if (errors) {
      console.log(errors)
      res.render('admin/form_add_news', {validation: errors, news: news})
      return
    }
    const connection = app.config.databaseConnection()
    const newsModel = new app.app.models.NewsModel(connection)

    newsModel.saveNews(news, connection, function (error, result) {
      if (error === null) {
        console.log(result)
        res.redirect('news')
      } else {
        console.log(error)
      }
    })
  })
}
