(function() {

  'use strict';
  angular
    .module('myApp')
    .filter('objectFilter', objectFilter);

  function objectFilter() {

    return function(apiObjArr, searchStr) {

      let output = apiObjArr;
      if (searchStr !== '') {
        output = apiObjArr.filter(apiObj => !Object.keys(apiObj).map(key => apiObj[key]).map(value => value.includes(searchStr)).some(bools => bools));
      }

      return output;
    };
  }
})();
