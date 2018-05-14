module.exports = function () {
  this.getNews = function (connection, callback) {
    connection.query('SELECT * FROM news', callback)
  }

  this.saveNews = function (news, connection, callback) {
    connection.query('INSERT INTO news set ?', news, callback)
  }

  this.getNewsById = function (connection, callback) {
    connection.query('SELECT * FROM news WHERE id = 1', callback)
  }

  return this
}
