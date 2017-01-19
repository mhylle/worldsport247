/**
 * Created by mhylle on 06-10-2016.
 */
(function () {
  'use strict';

  angular
    .module('results')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['ResultsService'];

  /* @ngInject */
  function ResultsController(ResultsService) {
    var vm = this;
    vm.title = 'ResultsController';
    vm.getResults = getResults;
    activate();

    ////////////////

    function activate() {

    }

    function getResults(url) {
      var parseFeed = ResultsService.parseFeed(url);
    }
  }

})();

