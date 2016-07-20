/**
 * Controller for user 
 */

var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

//Save user
module.exports.saveUser = function (req, res) {
	
	var user = new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.setPassword(req.body.password);
	
	user.save ( function (err) {
		if (err) {
			res.status (500);
			res.json (err);
		} else {
			res.status (200);
			res.json ({message : 'Saved Successfully.'});
		}
	});
	
};

//Get user profile
module.exports.getUserProfile = function(req, res) {
    console.log(req);
	if (!req.params.id) {
		res.status(401).json({"message" : "Unauthorized! Please login to proceed."});
	}
	else {
		User.findById (req.params.id)
			.exec ( function (err, user) {
				console.log (user);
				res.status(200).json(user);
			});
	}
};