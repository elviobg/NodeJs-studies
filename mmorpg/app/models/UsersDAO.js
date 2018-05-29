function UsersDAO (connection) {
  this._dbConnection = connection()
}

UsersDAO.prototype.createNewUser = function (user, response) {
  var data = {
    operation: 'insertUser',
    user: user,
    collection: 'users',
    callback: response
  }
  this._dbConnection(data)
}

UsersDAO.prototype.authenticateUser = function (user, response) {
  var data = {
    operation: 'findUser',
    user: user,
    collection: 'users',
    callback: response
  }
  this._dbConnection(data)
}

module.exports = function () {
  return UsersDAO
}
