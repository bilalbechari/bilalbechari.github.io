controllers.controller('accueilController', function($scope, $rootScope) {
  $rootScope.currentPage = "accueil"

  

  $rootScope.removeActiveLink()
  $('.accueil').addClass('active')
});