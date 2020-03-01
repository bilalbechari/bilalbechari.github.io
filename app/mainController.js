controllers.controller('mainController', function($scope, $rootScope, $http) {
  

  $rootScope.removeActiveLink = function () {
    $('.accueil').removeClass('active')
    $('.formation').removeClass('active')
    $('.experiences').removeClass('active')
    $('.competences').removeClass('active')
    $('.hobbies').removeClass('active')
  }
});