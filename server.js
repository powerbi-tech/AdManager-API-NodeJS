//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://dct:paradox@ds161304.mlab.com:61304/digitalads');


//Express setup
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routes
app.use('/api', require('./routes/api'));

//start the server
app.listen(3000);
console.log('Listing on port 3000');
