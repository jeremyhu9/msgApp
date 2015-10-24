var postMsg = require('./PostSchema');
var user = require('./UserSchema');

module.exports = function(app, passport, router) {
  // var router = app.Router();

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

   // process the signup form
   app.post('/signup', passport.authenticate('sign-up', {
     successRedirect : '#/main', 
     failureRedirect : '#/signup', 
     failureFlash : true 
   }));

   // Process login form
   app.post('/login', passport.authenticate('login', {
    successRedirect : '#/main',
    failureRedirect : '#/signup',
    failureFlash : true
   }))

  // All routes are prefixed with /api
  app.use('/api', router);
}