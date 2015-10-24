var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  description: String,
  username: String
});

module.exports = mongoose.model('post', postSchema);