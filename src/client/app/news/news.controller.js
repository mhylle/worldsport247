(function () {
  'use strict';

  angular
    .module('app')
    .controller('NewsController', NewsController);

  NewsController.$inject = ['NewsService'];

  /* @ngInject */
  function NewsController(NewsService) {
    var vm = this;
    vm.title = 'NewsController';

    vm.news = [];
    vm.fetchNews = fetchNews;
    activate();

    ////////////////

    function activate() {
      fetchNews();
    }

    function fetchNews() {
      NewsService.fetchNews().then(function (response) {
        if (!response) {
          vm.news = [];
        } else {
          vm.news = response;
        }
      });
    }
  }

})();
