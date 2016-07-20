/**
 * Holds passport configuration
 */

//passport setup
var passport = require('passport');

//Using local strategy - username/password with database validation. As we'll be instantiating it, lets keep this variable as class
var LocalStrategy = require('passport-local').Strategy;


//User validation - needs the user model 
var mongoose = require('mongoose');
var User = mongoose.model('User');


passport.use (
	new LocalStrategy (
		{usernameField: 'email'},
		function (username, password, done) {
			User.findOne (
					{email: username},
					function (err, user) {
						
						//If Error, return
						if (err) {
							return done (err);
						}
						
						//If user not found
						if (!user) {
							return done (null, false, {message: 'Invalid User! Please verify the username.'});
						}
						
						//Match password
						if (!user.validatePassword(password)) {
							return done (null, false, {message: 'Invalid Credentials! Please verify the password.'});
						}
						
						//successful login - return user.
						return done (null, user);
					}
			);
		}
	)
);