(function() {

	angular.module('meanjwt').controller('registrationController', registrationController);

	registrationController.$inject = ['$scope','$state', '$stateParams', '$location', 'authentication' ];
	function registrationController($scope, $state, $stateParams, $location, authentication) {

		$scope.registrationSuccessful = false;
		$scope.regDetails = {
			name : "",
			email : "",
			password : ""
		};

		$scope.onRegSubmit = function() {
			console.log('Making registration...');
			authentication.register($scope.regDetails).error(function(err) {
				alert(err);
			}).then(function() {
				$scope.registrationSuccessful = true;
			});
		};

	}

})();