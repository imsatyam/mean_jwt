(function() {

	angular.module('meanjwt').controller('loginController', loginController);

	loginController.$inject = ['$scope','$state', '$stateParams', '$location', 'authentication' ];
	function loginController($scope, $state, $stateParams, $location, authentication) {

		$scope.credentials = {
			email : "",
			password : ""
		};

		$scope.onSubmit = function() {
			authentication.login($scope.credentials).error(function(err) {
				alert(err);
			}).then(function() {
				var currentUser = authentication.currentUser();
				$state.go('profile', {userId : currentUser.id});
			});
		};

	}

})();