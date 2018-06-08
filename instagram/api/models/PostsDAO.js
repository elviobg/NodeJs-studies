function PostsDAO (connection, imageManager) {
  this._dbConnection = connection()  
}

PostsDAO.prototype.insertNewPost = function (post, response) {
  var data = {
    operation: 'insertNewPost',
    post: post,
    collection: 'posts',
    callback: response
  }
  this._dbConnection(data)
}

PostsDAO.prototype.getAllPosts = function (response) {
  var data = {
    operation: 'getAllPosts',
    collection: 'posts',
    callback: response
  }
  this._dbConnection(data)
}

PostsDAO.prototype.getPostByID = function (id, response) {
  var data = {
    operation: 'getPostByID',
    id: id,
    collection: 'posts',
    callback: response
  }
  this._dbConnection(data)
}

PostsDAO.prototype.updatePost = function (id, post, response) {
  var data = {
    operation: 'updatePost',
    post: post,
    id: id,
    collection: 'posts',
    callback: response
  }
  this._dbConnection(data)
}

PostsDAO.prototype.removePost = function (id, response) {
  var data = {
    operation: 'removePost',    
    id: id,
    collection: 'posts',
    callback: response
  }
  this._dbConnection(data)
}

module.exports = function () {
  return PostsDAO
}
