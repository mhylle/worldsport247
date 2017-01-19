(function () {
  'use strict';

  angular
    .module('app')
    .factory('OfferService', OfferService);

  OfferService.$inject = ['$http'];

  /* @ngInject */
  function OfferService($http) {
    var service = {
      getOffer : getOffer,
      getLimitedOffer: getLimitedOffer
    };
    return service;

    ////////////////

    function getLimitedOffer() {
      return $http.get('/api/limitedOffer')
        .then(onGetLimitedOfferSuccess)
        .catch(onGetLimitedOfferError);

      function onGetLimitedOfferSuccess(response) {
        if (response.data) {
          return response.data;
        }
        return [];
      }

      function onGetLimitedOfferError(error) {
        return [];
      }
    }
    function getOffer() {
      return $http.get('/api/offer')
        .then(onGetOfferSuccess)
        .catch(onGetOfferError);

      function onGetOfferSuccess(response) {
        if (response.data) {
          return response.data;
        }
        return [];
      }

      function onGetOfferError(error) {
        return [];
      }
    }
  }

})();
