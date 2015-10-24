var localStrategy = require('passport-local').Strategy;


// Loading user model
var User = require('../server/UserSchema');

module.exports = function(passport) {
  // used to serialize the user for the session
   passport.serializeUser(function(user, done) {
       done(null, user.id);
   });

   // used to deserialize the user
   passport.deserializeUser(function(id, done) {
       User.findById(id, function(err, user) {
           done(err, user);
       });
   });

   passport.use('sign-up', new localStrategy(
     function(username, password, done) {

        process.nextTick(function(){
         User.findOne({'usrname': username}, function(err, user) {
           if (err) { return done(err); }
           if (user) {
             return done(null, false, { message: 'User already exists.' });
           } else {
              // Create a new user
              var newUser = new User();

              newUser.usrname = username;
              newUser.password = newUser.generateHash(password);

              newUser.save(function(err){
                if (err) return console.error(err);
                return done(null, newUser);
              })
           }
           
         });

       });
     }
   ));

   // Authenticate user login credentials
   passport.use('login', new localStrategy(
    function(username, password, done) {
        User.findOne({'usrname': username}, function(err, user){
          console.log(user)
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Wrong user name'});
          } 

          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Invalid password'});
          }

          return done(null, user);
        })
    }
   ))
}