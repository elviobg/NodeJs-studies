module.exports.insert = function (api, req, res) {
  var data = req.body
  const connection = api.config.databaseConnection
  const postsDAO = new api.models.PostsDAO(connection)

  postsDAO.insertNewPost(data, function (err, result) {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
}

module.exports.getAllPosts = function (api, req, res) {
  const connection = api.config.databaseConnection
  const postsDAO = new api.models.PostsDAO(connection)

  postsDAO.getAllPosts(function (err, result) {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
}
module.exports.getPostByID = function (api, req, res) {
  const connection = api.config.databaseConnection
  const postsDAO = new api.models.PostsDAO(connection)

  postsDAO.getPostByID(req.params.id, function (err, result) {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
}