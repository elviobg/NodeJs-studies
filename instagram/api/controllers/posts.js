module.exports.insert = function (api, req, res) {
  const imageManager = api.config.imageManager  
  const imagesDAO = new api.models.ImageDAO(imageManager)  
  const date = new Date()
  const pathDestination = date.getTime() + '_' + req.files.image.originalFilename
  const pathOriginal = req.files.image.path

  imagesDAO.saveImage(pathOriginal, pathDestination, function(err, result){
    if(err){
      throw(err)
    }else{
      const data = {
        title: req.body.title,
        image_url: pathDestination
      }
      const connection = api.config.databaseConnection
      const postsDAO = new api.models.PostsDAO(connection)

      postsDAO.insertNewPost(data, function (err, result) {
        if (err) {
          res.json(err)
        } else {          
          res.json({'status':'deu certo'})
        }
      })
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

module.exports.updatePost = function (api, req, res) {
  var data = req.body
  const connection = api.config.databaseConnection
  const postsDAO = new api.models.PostsDAO(connection)
  
  const callback = function (err, result) {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  }
  
  if (data.title !== undefined) {
    console.log('title', data.title)
    postsDAO.updatePostTitle(req.params.id, data, callback)
  }else if (data.comment !== undefined) {
    console.log('comments', data.comment)
    postsDAO.updatePostComments(req.params.id, data, callback)
  }
}

module.exports.removePost = function (api, req, res) {
  const connection = api.config.databaseConnection
  const postsDAO = new api.models.PostsDAO(connection)

  postsDAO.removePost(req.params.id, function (err, result) {
    if (err) {
      res.json(err)
    } else {      
      res.json(result)
    }
  })
}