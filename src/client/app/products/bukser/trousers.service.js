/**
 * Created by mhyll on 28-09-2016.
 */
(function () {
  'use strict';

  angular
    .module('app')
    .factory('TrousersService', TrousersService);

  TrousersService.$inject = ['$http'];

  /* @ngInject */
  function TrousersService($http) {
    var service = {
      getTrousers: getTrousers
    };
    return service;

    ////////////////

    function getTrousers() {
      return $http.get('/api/trousers')
        .then(onGetTrousersSuccess)
        .catch(onGetTrousersError);

      function onGetTrousersSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return [];
      }

      function onGetTrousersError(error) {
        // Logger.error('Error during getTrousers: ' + error);
        return [];
      }
    }
  }

})();

