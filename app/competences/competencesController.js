controllers.controller('competencesController', function($scope, $rootScope) {
  $rootScope.currentPage = "competences"

  $rootScope.removeActiveLink()
  $('.competences').addClass('active')
});