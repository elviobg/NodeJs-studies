function NewsDAO (connection) {
  this._connection = connection
}

NewsDAO.prototype.getNews = function (connection, callback) {
  connection.query('SELECT * FROM news ORDER BY creation_date DESC', callback)
}

NewsDAO.prototype.saveNews = function (news, connection, callback) {
  connection.query('INSERT INTO news set ?', news, callback)
}

NewsDAO.prototype.getNewsById = function (id, connection, callback) {
  connection.query('SELECT * FROM news WHERE id = ?', id, callback)
}

NewsDAO.prototype.getFirstNews = function (numberOfNews, connection, callback) {
  connection.query('SELECT * FROM news ORDER BY creation_date DESC LIMIT ?', 5, callback)
}

module.exports = function () {
  return NewsDAO
}
