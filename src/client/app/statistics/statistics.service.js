/**
 * Created by mhyll on 28-09-2016.
 */
(function () {
  'use strict';

  angular
    .module('app')
    .factory('StatisticsService', StatisticsService);

  StatisticsService.$inject = ['$http'];

  /* @ngInject */
  function StatisticsService($http) {
    var service = {
      getMatches: getMatches
    };
    return service;

    ////////////////

    function getMatches(type) {
      return $http.get('/api/statistics/' + type)
        .then(onGetMatchesSuccess)
        .catch(onGetMatchesError);

      function onGetMatchesSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return [];
      }

      function onGetMatchesError(error) {
        // Logger.error('Error during getTrousers: ' + error);
        return [];
      }
    }
  }

})();

