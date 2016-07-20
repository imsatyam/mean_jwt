/**
 * Node configurations of the project
 */

//Express setup
var express = require ('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require ('path');
require('jade');

//Logging setup
var logger = require('morgan');

//Passport setup
var passport = require('passport');

//Get config - Database Models
require('./api/config/database');

//Configure passport strategy
require('./api/config/passport');

//Get routes
var routes = require('./api/config/route');

//Instantiate Express
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));			//Serve stylesheets (static files) from public directory
app.use(express.static(path.join(__dirname, 'client')));			//Serve angular js (static files) files from here

app.use(passport.initialize());

app.use('/api', routes);											//Defines the node route i.e. server controller routes

app.use(function(req, res) {										//Send to index.html for angular to handle the request and display view.	
	res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


//Exception Handling
//1. if 404
app.use (function (req, res, next) {
	var err = new Error ('Not Found!');
	err.status = 404;
	next (err);
});

//2. If Unauthorized
app.use (function (req, res, next) {
	var err = new Error ('Not Found!');
	err.status = 404;
	next (err);
});

//3. Error resolver
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {				//This is rendering the response in a page. We can simply return json if we want. http://stackoverflow.com/questions/23595282/error-no-default-engine-was-specified-and-no-extension-was-provided
		message: err.message,
	    error: err
	});
});

module.exports = app;