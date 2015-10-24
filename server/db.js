var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

module.exports = function() {
  mongoose.connect('mongodb://localhost/msgApp');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log("DB IS UP!")
  });
}



