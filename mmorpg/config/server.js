const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(express.static(path.join(__dirname, '/../app/public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
  .include('config/databaseConnection.js')
  .then('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app)

module.exports = app
