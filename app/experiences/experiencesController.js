controllers.controller('experiencesController', function($scope, $rootScope) {
  $rootScope.currentPage = "experiences"

  $(document).ready(function() {
    new WOW().init()
  })

  $rootScope.removeActiveLink()
  $('.experiences').addClass('active')
});