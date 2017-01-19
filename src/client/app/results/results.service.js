/**
 * Created by mhylle on 06-10-2016.
 */
(function () {
  'use strict';

  angular
    .module('results')
    .factory('ResultService', ResultService);

  ResultService.$inject = ['$http'];

  /* @ngInject */
  function ResultService($http) {
    var service = {
      parseFeed: parseFeed
    };
    return service;

    ////////////////

    function parseFeed(url) {
      return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' +
        encodeURIComponent(url));
    }
  }

})();

