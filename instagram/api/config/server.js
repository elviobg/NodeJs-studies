const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const api = express()

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())

consign()
  .include('./config/databaseConnection.js')
  .then('./models')
  .then('./controllers')
  .then('./routes')
  .into(api)

module.exports = api
