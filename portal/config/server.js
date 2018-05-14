const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./config/databaseConnection.js')
    .into(app);

module.exports = app;