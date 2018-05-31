const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const consign = require('consign')
const api = express()
const PORT = 3000

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())

consign()
  .include('./config/databaseConnection.js')
  .then('./models')
  .then('./controllers')
  .then('./routes')
  .into(api)

module.exports = api
