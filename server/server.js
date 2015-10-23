var express = require('express');
var bodyParser = require('body-parser');
var postMsg = require('./db');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client'));

var router = express.Router();

router.use(function(req,res, next){
  console.log("Something is happening");
  next();
})


router.get('/', function(req, res){
  res.json({message: 'API IS UP!'});
});

router.route('/posts')
  // Creates a new posts
  .post(function(req,res){
    var posts = new postMsg();

    posts.title = req.body.title;
    posts.description = req.body.description;
    posts.username = req.body.username;


    posts.save(function(err){
      if (err) return console.error(err);

      res.json({message: 'post submitted'})
    })
  })

  .get(function(req,res){
    postMsg.find(function(err, postmsgs){
      if (err) return console.error(err);

      res.json(postmsgs);
    })
  })


// All routes are prefixed with /api
app.use('/api', router);

var server = app.listen(3000, function(){
  var port = server.address().port;

  console.log('msgApp listening at http://localhost:',port);
});


