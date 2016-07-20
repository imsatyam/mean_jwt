/**
 * define the module
 */

var constants = window.settings || {};
var app = angular.module ('meanjwt', ['ui.router']).constant('Constants', constants);

app.config (function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise ('/');
	
	$stateProvider
		.state ('home', {
			url: '/',
			controller: 'homeController',
			templateUrl: 'home/home.tpl.html'
		})
		
		.state ('login', {
			url: '/login',
			controller: 'loginController',
			templateUrl: 'login/login.tpl.html'
		})
		
		.state ('register', {
			url: '/register',
			controller: 'registrationController',
			templateUrl: 'register/register.tpl.html'
		})
		
		.state ('profile', {
			url: '/profile/:userId',
			controller: 'profileController',
			templateUrl: 'profile/profile.tpl.html'
		})
	
});
