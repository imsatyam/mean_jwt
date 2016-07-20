/**
 * Holds database configuration
 */

//mongoose setup
var mongoose = require ('mongoose');

//Database properties
var databaseHost = process.env.DB_HOST || 'localhost';
var databasePort = process.env.DB_PORT || '27017';
var databaseName = "nodesample";
var databaseURL = 'mongodb://' + databaseHost + ":" + databasePort + "/" + databaseName;

//Connect
mongoose.connect (databaseURL);

//Capture the connection events for logging
mongoose.connection.on ('connected', function() {
	console.log ('Connection established with database: ' + databaseURL);
});

mongoose.connection.on ('disconnected', function() {
	console.log ('Database connection is closed.');
});

mongoose.connection.on ('error', function(err) {
	console.log ('Error while making database connection: ' + err);
});


//Add the schema and models
require('../model/user');