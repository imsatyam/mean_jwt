(function () {

  angular
    .module('meanjwt')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directive/navigation/navigation.template.html',
      controller: 'navigationController as navvm'
    };
  }

})();