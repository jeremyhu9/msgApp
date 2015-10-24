var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var db = require('./db');
var mongoose = require('mongoose');
var flash    = require('connect-flash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('client'));

var router = express.Router();
db();

// Passport setup
app.use(session({secret: 'notasecret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes')(app, passport, router);
require('../config/passport')(passport);

var server = app.listen(3000, function(){
var port = server.address().port;

  console.log('msgApp listening at http://localhost:',port);
});


