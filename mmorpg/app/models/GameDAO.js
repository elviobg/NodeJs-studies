function GameDAO (connection) {
  this._dbConnection = connection()
}

GameDAO.prototype.getUserStats = function (user, response) {
  var data = {
    operation: 'findUserStats',
    user: user,
    collection: 'game',
    callback: response
  }
  this._dbConnection(data)
}

GameDAO.prototype.createNewStats = function (user, response) {
  var game = {
    user: user,
    fear: Math.floor(Math.random() * 1000),
    wisdow: Math.floor(Math.random() * 1000),
    trade: Math.floor(Math.random() * 1000),
    magic: Math.floor(Math.random() * 1000),
    vassal: 10,    
    coin: 15
  }
  var data = {
    operation: 'insertNewStats',
    game: game,
    collection: 'game',
    callback: response
  }
  this._dbConnection(data)
}

module.exports = function () {
  return GameDAO
}
