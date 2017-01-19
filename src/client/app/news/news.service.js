(function () {
  'use strict';

  angular
    .module('app')
    .service('NewsService', NewsService);

  NewsService.$inject = ['$http'];

  /* @ngInject */
  function NewsService($http) {
    this.fetchNews = fetchNews;

    ////////////////

    function fetchNews() {
      return $http.get('/api/news/')
        .then(onGetNewsSuccess)
        .catch(onGetNewsError);

      function onGetNewsSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetNewsError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }
  }

})();
