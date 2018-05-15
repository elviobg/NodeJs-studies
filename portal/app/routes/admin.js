module.exports = function (app) {
  app.get('/news/add', function (req, res) {
    app.app.controllers.admin.form_add_news(app, req, res)
  })
}
