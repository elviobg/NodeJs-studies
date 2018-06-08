const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const multiparty = require('connect-multiparty')
const api = express()

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())
api.use(multiparty())
api.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

consign()
  .include('./config/databaseConnection.js')
  .then('./config/imageManager.js')
  .then('./models')
  .then('./controllers')
  .then('./routes')
  .into(api)

module.exports = api
