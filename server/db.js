var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/msgApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB IS UP!")
});

var postSchema = new mongoose.Schema({
  title: String,
  description: String,
  username: String
});

module.exports = mongoose.model('post', postSchema);

