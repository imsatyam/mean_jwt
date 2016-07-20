/**
 * Database model for user.
 */

//Get minimal set up desired
var mongoose = require ('mongoose');
var crypto = require ('crypto');

//Create schema definition
var user = new mongoose.Schema (
	{
		email : {
			type: String,
			unique: true,
			required: true
		},
		
		name : {
			type: String,
			unique: true
		},
		
		hash : String,
		
		salt : String
	}
);

//Method to set the password in non-readable form
user.methods.setPassword =  function (password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

//Method to validate the password
user.methods.validatePassword = function (password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	return this.hash === hash;
};

//set this in mongoose model
mongoose.model('User', user);