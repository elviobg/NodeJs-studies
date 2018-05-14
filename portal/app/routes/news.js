module.exports = function (app) {
  app.get('/news', function (req, res) {
    const connection = app.config.databaseConnection()
    const newsModel = app.app.models.newsModel

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
    const newsModel = app.app.models.newsModel

    newsModel.saveNews(news, connection, function (error, result) {
      if (error === null) {
        // console.log(result)
        res.render('news/news', {news: result})
      } else {
        console.log(error)  
      }
    })
  })
}
