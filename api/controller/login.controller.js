/**
 * Controller for user 
 */

var passport = require ('passport');
var mongoose = require ('mongoose');
var jwt  = require ('jsonwebtoken');
var config = require ('../config/base');

var User = mongoose.model ('User');

//Login function
module.exports.login = function(req, res) {
	
	//Call the authenticate method
	passport.authenticate (
		'local',
		function (err, user, info) {
			
			if (err) {
				res.status(404).json(err);
			}
			
			if (user) {
				
				var expiryDateTime = new Date(); 
				expiryDateTime.setHours(expiryDateTime.getHours() + 1);
				
				var tokenizedObj = {};
				tokenizedObj.id = user._id;
				tokenizedObj.email = user.email;
				tokenizedObj.name = user.name;
				tokenizedObj.exp = expiryDateTime.getTime();
				
				var token = jwt.sign(
								tokenizedObj,
								config.secret
							);
				res.status(200);
				res.json({
					"token" : token
				});
			} else {
				res.status(401).json(info);
			}
		}
	)(req, res);
	
};