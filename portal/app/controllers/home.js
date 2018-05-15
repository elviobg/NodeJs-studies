module.exports.index = function (app, req, res) {
  const connection = app.config.databaseConnection()
  const newsModel = new app.app.models.NewsModel(connection)

  newsModel.getFirstNews(5, connection, function (error, result) {
    if (error === null) {
      res.render('home/index', {news: result})
    } else {
      console.log(error)
    }
  })
}
