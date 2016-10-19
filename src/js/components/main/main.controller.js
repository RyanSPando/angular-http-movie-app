(function() {

  'use strict';
  const apiURL = 'https://www.omdbapi.com/\?';
  const view = '/movie';
  const home = '/';
  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http', '$location', '$q'];

  function mainController($scope, $http, $location, $q) {
    /*jshint validthis: true */
    var vm = this;
    vm.searchStr = '';
    vm.movies = [];
    vm.movie = {};
    vm.moviesFull = [];
    vm.searchType = '';
    vm.tomatoes = vm.tomatoes || false;
    vm.excludeStr = '';
    let tomatoes = '';

    vm.apiRequest = () => {
      return $http({
        method: 'GET',
        url: `${apiURL}s=${vm.searchStr}&type=${vm.searchType}`
      })
      .then(moviesApi => {
        vm.movies = [];
        vm.moviesFull = [];
        vm.movies = Object.assign([], moviesApi.data.Search);
        let promises = vm.movies.map(movie => {
          vm.tomatoes ? tomatoes = 'true' : tomatoes = 'false'; //jshint ignore:line
          $http({
            method: 'GET',
            url: `${apiURL}i=${movie.imdbID}&tomatoes=${tomatoes}`
          })
          .then(movieApi => {
            vm.moviesFull.push(movieApi.data);
          });
        });
        $location.path(home);
        return $q.all(promises);

      })
      .catch(err => {
        console.log(err);
      });
    };

    vm.singleMovie = (imdbID) => {
      vm.movie = vm.moviesFull.filter(movie => movie.imdbID === imdbID)[0];
      $location.path(view);
    };
  }
})();
