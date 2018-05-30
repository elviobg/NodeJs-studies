const objectID = require('mongodb').ObjectID

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
      collection.find({user: data.user.user}).toArray(data.callback)
      break
    case 'insertNewStats':
      collection.insertOne(data.game, data.callback)
      break
    case 'findUserStats':
      collection.find({user: data.user}).toArray(data.callback)
      break
    case 'insertNewAction':
      collection.insertOne(data.action, data.callback)
      break
    case 'findUserActions':
      collection.find({user: data.user, endsAt: {$gt: data.currentTime}}).toArray(data.callback)
      break
    case 'removeUserAction':
      collection.deleteOne({_id: objectID(data._id)}, data.callback)
      break
    case 'updateCoins':
      collection.updateOne({user: data.user}, {$inc: {coin: data.coins}}, data.callback)
      break
    default:
      break
  }
}

module.exports = function () {
  return databaseConnection
}
