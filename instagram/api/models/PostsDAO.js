function PostsDAO (connection) {
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

module.exports = function () {
  return PostsDAO
}
