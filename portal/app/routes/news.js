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
