(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/view.home.html'
      })
      .when('/movie', {
        templateUrl: 'js/components/movies/view.movie.html'
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }

})();
