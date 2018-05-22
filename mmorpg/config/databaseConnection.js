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

function query (db, dados) {
  var collection = db.collection(dados.collection)
  switch (dados.operacao) {
    case 'insert':
      collection.insertOne(dados.usuario, dados.callback)
      break
    default:
      break
  }
}

module.exports = function () {
  return databaseConnection
}
