const db = {
  user: 'root',
  password: '',
  database: 'news_portal',
  host: 'localhost'
}

const databaseConnection = function () {
  const mysql = require('mysql')

  return mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
  })
}

module.exports = function () {
  return databaseConnection
}
