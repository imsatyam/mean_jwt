/**
 * Contains node route for the application
 * 
 */
var express = require ('express');
var config = require ('./base');
var jwt = require ('express-jwt');

var auth = jwt({
	  secret: config.secret,
	  userProperty: 'payload'
	});


//Add controllers
var loginController = require ('../controller/login.controller.js');
var userController = require ('../controller/user.controller.js');

//Define router
var router = express.Router();

router.post ('/register', userController.saveUser);
router.post ('/login', loginController.login);

router.get ('/profile/:id', auth, userController.getUserProfile);

//Export router module
module.exports = router;