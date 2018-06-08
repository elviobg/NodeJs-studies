const ObjectID = require('mongodb').ObjectID
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

PostsDAO.prototype.updatePostComments = function (id, post, response) {
  post.comment = {id: new ObjectID(),
    comment: post.comment,
    time: new Date().getTime()}
  var data = {
    operation: 'updatePostComments',
    post: post,
    id: id,
    collection: 'posts',
    callback: response
  }
  console.log(data)
  this._dbConnection(data)
}

PostsDAO.prototype.removePostComments = function (id, comment, response) {
  var data = {
    operation: 'removePostComments',
    id: id,
    commentId: comment.commentId,
    collection: 'posts',
    callback: response
  }
  console.log(data)
  this._dbConnection(data)
}

PostsDAO.prototype.updatePostTitle = function (id, post, response) {
  var data = {
    operation: 'updatePostTitle',
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
