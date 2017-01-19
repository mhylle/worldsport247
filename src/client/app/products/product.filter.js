(function () {
  'use strict';

  angular
    .module('app')
    .filter('productFilter', productFilter);

  function productFilter() {
    return productFilterFilter;

    ////////////////

    function productFilterFilter(input, brand) {
      if (input) {
        if (input.type === brand) {
          return input;
        }
      }
    }
  }

})();


