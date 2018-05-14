module.exports = function(app)
{
    app.get('/news/add', function(req, res){
        res.render("admin/form_add_news");
    });
}