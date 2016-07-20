(function() {

	angular.module('meanjwt').service('meanData', meanData);

	meanData.$inject = [ '$http', 'authentication' ];
	function meanData($http, authentication) {

		return {
			getProfile : function(configObj) {
				var url = "/api/profile/" + configObj.userId;
				return $http.get(url, {
					headers : {
						Authorization : 'Bearer ' + authentication.getToken()
					}
				});
			}
		};
		
	}

})();