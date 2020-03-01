controllers.controller('hobbiesController', function($scope, $rootScope) {
  $rootScope.currentPage = "hobbies"

  $rootScope.removeActiveLink()
  $('.hobbies').addClass('active')
});