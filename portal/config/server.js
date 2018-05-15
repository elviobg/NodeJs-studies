const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const validator = require('express-validator')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(validator())

consign()
  .include('./app/routes')
  .then('./app/models')
  .then('./config/databaseConnection.js')
  .into(app)

module.exports = app
