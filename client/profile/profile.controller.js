(function() {
  
  angular
    .module('meanjwt')
    .controller('profileController', profileController);

  profileController.$inject = ['$scope','$state', '$stateParams', '$location', 'meanData'];
  function profileController($scope, $state, $stateParams, $location, meanData) {

	$scope.user = {};
	$scope.userId = $stateParams.userId;

	$scope.configObj = {};
	$scope.configObj.userId = $scope.userId;
	
    meanData.getProfile($scope.configObj)
      .success(function(data) {
    	  $scope.user = data;
      })
      .error(function (e) {
        console.log(e);
      });
  }

})();