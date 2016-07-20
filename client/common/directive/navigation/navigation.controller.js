(function() {

	angular.module('meanjwt')
			.controller('navigationController', navigationController);

	navigationController.$inject = [ '$location', 'authentication' ];
	function navigationController($location, authentication) {
		var vm = this;

		vm.isLoggedIn = authentication.isLoggedIn();

		vm.currentUser = authentication.currentUser();

	}

})();