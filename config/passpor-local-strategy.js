const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using passport
passport.use(LocalStrategy({
    usernameField: 'email'
},
function(email, password, done){
    // find user and establish user identity
    User.findById({email: email}, function(err, user){
        if(err){
            console.log('error in finding user --> passport');
            return done(err);
        }
        if(!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null, false);
        }

        return done(null, user);
    });
}

));

// serializing the user to decide which key is to be kept in cookie
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// deserializing the user to from the key in cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user --> passport');
            return done(err);
        } 

        return done(null, user);
    });
});

module.exports = passport;