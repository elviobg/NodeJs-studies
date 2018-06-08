const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const multiparty = require('connect-multiparty')
const fs = require('fs')
const api = express()

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())
api.use(multiparty())

consign()
  .include('./config/databaseConnection.js')
  .then('./config/imageManager.js')
  .then('./models')
  .then('./controllers')
  .then('./routes')
  .into(api)

module.exports = api
