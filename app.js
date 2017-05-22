var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

var carparkController = require('./controllers/carpark.js');
app.use('/mall', carparkController);

// LISTENER
app.listen(port, function () {
  console.log('server started on port', port)
})
