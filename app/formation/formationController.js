controllers.controller('formationController', function($scope, $rootScope) {
  $rootScope.currentPage = "formation"

  $rootScope.removeActiveLink()
  $('.formation').addClass('active')
});