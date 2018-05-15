module.exports.form_add_news = function (app, req, res) {
  res.render('admin/form_add_news', {validation: {}, news: {}})
}
