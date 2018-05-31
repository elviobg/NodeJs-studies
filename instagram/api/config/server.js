const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const consign = require('consign')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

consign()
  .include('./config/databaseConnection.js')
  .then('./models')
  .then('./controllers')
  .then('./routes')
  .into(app)

module.exports = app
