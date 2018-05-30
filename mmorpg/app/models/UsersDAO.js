const crypto = require('crypto')

function UsersDAO (connection) {
  this._dbConnection = connection()
}

UsersDAO.prototype.createNewUser = function (user, response) {
  const encryptedKey = crypto.createHash('md5').update(user.key).digest('hex')
  user.key = encryptedKey
  var data = {
    operation: 'insertUser',
    user: user,
    collection: 'users',
    callback: response
  }
  this._dbConnection(data)
}

UsersDAO.prototype.authenticateUser = function (user, response) {
  const encryptedKey = crypto.createHash('md5').update(user.key).digest('hex')
  user.key = encryptedKey
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
