const dbConsts = {
  database: 'gotmmorpg',
  host: 'localhost',
  port: 27017,
  url: 'mongodb://localhost:27017'
}

const databaseConnection = function () {
  const mongodb = require('mongodb').MongoClient
  const assert = require('assert')

  return function (data) {
    mongodb.connect(dbConsts.url, function (err, client) {
      assert.equal(null, err)
      console.log('Connected successfully to server')
      const db = client.db(dbConsts.database)
      query(db, data)
      client.close()
    })
  }
}

function query (db, data) {
  var collection = db.collection(data.collection)
  switch (data.operation) {
    case 'insertUser':
      collection.insertOne(data.user, data.callback)
      break
    case 'findUser':
      collection.find(data.user).toArray(data.callback)
      break
    case 'insertNewStats':
      collection.insertOne(data.game, data.callback)
      break
    case 'findUserStats':
      collection.find(data.user).toArray(data.callback)
      break
    default:
      break
  }
}

module.exports = function () {
  return databaseConnection
}
