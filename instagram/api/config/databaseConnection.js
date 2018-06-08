const objectID = require('mongodb').ObjectID

const dbConsts = {
  database: 'instagram_clone',
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
    case 'insertNewPost':
      collection.insertOne(data.post, data.callback)
      break
    case 'getAllPosts':
      collection.find().toArray(data.callback)
      break
    case 'getPostByID':
      collection.find({_id: objectID(data.id)}).toArray(data.callback)
      break
    case 'updatePostTitle':
      collection.update({_id: objectID(data.id)}, {$set: {title:data.post.title}}, {}, data.callback)
      break
    case 'updatePostComments':
      collection.update({_id: objectID(data.id)}, {$push: {comments:data.post.comment}}, {}, data.callback)
      break
    case 'removePost':      
      collection.remove({_id: objectID(data.id)}, data.callback)
      break
  }
}

module.exports = function () {
  return databaseConnection
}
