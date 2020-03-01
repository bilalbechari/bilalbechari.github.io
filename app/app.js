var myApp = angular.module('myApp',["ngRoute","Controllers"]);

var controllers = angular.module('Controllers', []);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/accueil/accueil.html',
      controller: 'accueilController'
    }).
    when('/formation', {
      templateUrl: 'app/formation/formation.html',
      controller: 'formationController'
    }).
    when('/experiences', {
      templateUrl: 'app/experiences/experiences.html',
      controller: 'experiencesController'
    }).
    when('/competences', {
      templateUrl: 'app/competences/competences.html',
      controller: 'competencesController'
    }).
    when('/hobbies', {
      templateUrl: 'app/hobbies/hobbies.html',
      controller: 'hobbiesController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);