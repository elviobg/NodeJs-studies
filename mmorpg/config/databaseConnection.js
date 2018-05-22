const db = {
  database: 'gotmmorpg',
  host: 'localhost',
  port: 27017
}

const databaseConnection = function () {  
  const mongodb = require('mongodb')

  return new mongodb.Db(
    db.database,
    new mongodb.Server(
      db.host,
      db.port,
      {}
    ),
    {}
  )
}

module.exports = function () {
  return databaseConnection
}
