var express = require('express');
var app = express();
var env = require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  
  app.get('/json', function(req, res) {
    if(process.env.MESSAGE_STYLE = 'allCaps') {
      response = res.json({message: "Hello World".toUpperCase()})
    }
      else {
        response = res.json({message: "Hello world"})
      }
  })



























 module.exports = app;
