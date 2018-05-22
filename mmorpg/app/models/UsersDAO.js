function UsersDAO (connection) {
  this._dbConnection = connection()
  console.log(this._dbConnection)
}

UsersDAO.prototype.createNewUser = function (user, res) {
  var data = {
    operacao: 'insert',
    usuario: user,
    collection: 'users',
    callback: function (err, result) {
      res
    }
  }
  this._dbConnection(data)
}

module.exports = function () {
  return UsersDAO
}
