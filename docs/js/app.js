// sample angular code

(function() {
  'use strict';
  $(document).ready(function() {
    $('select').material_select();
  });

  angular
    .module('myApp', [
      'ngRoute',
      'ngAnimate',
      'myApp.config',
      'myApp.components.main'
    ]);

})();
