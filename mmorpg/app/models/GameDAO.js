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

GameDAO.prototype.vassalAction = function (action, user, response) {
  const date = new Date()
  var actionTime = action.action * 3600000
  action.user = user
  action.endsAt = actionTime + date.getTime()
  var data = {
    operation: 'insertNewAction',
    action: action,
    collection: 'action',
    callback: response
  }
  this._dbConnection(data)
}

GameDAO.prototype.getActions = function (user, response) {
  const time = new Date()
  const currentTime = time.getTime()
  var data = {
    operation: 'findUserActions',
    user: user,
    currentTime: currentTime,
    collection: 'action',
    callback: response
  }
  this._dbConnection(data)
}

module.exports = function () {
  return GameDAO
}
