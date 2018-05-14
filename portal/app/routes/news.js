module.exports = function(app) {
    
    app.get('/news', function(req, res){
        const connection = app.config.databaseConnection();
        const newsModel = app.app.models.newsModel;

        newsModel.getNews(connection, function(error, result){
            console.log(result);
            res.render("news/news", {news : result});
        });
    });

    app.post('/news', function(req, res){         
        const news = req.body;
        const connection = app.config.databaseConnection();
        const newsModel = app.app.models.newsModel;

        newsModel.saveNews(news, connection, function(error, result){            
            res.redirect("news");
        });
    });
}