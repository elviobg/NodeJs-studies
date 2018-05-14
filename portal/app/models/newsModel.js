function NewsDAO (connection) {
  this._connection = connection
}

NewsDAO.prototype.getNews = function (connection, callback) {
  connection.query('SELECT * FROM news', callback)
}

NewsDAO.prototype.saveNews = function (news, connection, callback) {
  connection.query('INSERT INTO news set ?', news, callback)
}

NewsDAO.prototype.getNewsById = function (connection, callback) {
  connection.query('SELECT * FROM news WHERE id = 1', callback)
}

module.exports = function () {
  return NewsDAO
}
