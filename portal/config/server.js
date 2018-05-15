const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const validator = require('express-validator')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static( __dirname+"/../app/public"));
app.use(bodyParser.urlencoded({extended: true}))
app.use(validator())

consign()
  .include('./config/databaseConnection.js')
  .then('./app/models')
  .then('./app/controllers')
  .then('./app/routes')
  .into(app)

module.exports = app
