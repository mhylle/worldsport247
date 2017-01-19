(function () {
  'use strict';

  angular
    .module('app')
    .controller('HaetteController', HaetteController);

  HaetteController.$inject = [];

  /* @ngInject */
  function HaetteController() {
    var vm = this;
    vm.title = 'HaetteController';
    vm.dateToConvert = new Date();
    vm.convertedDate = new Date();

    vm.convertDate = convertDate;

    activate();

    ////////////////

    function activate() {

    }

    function convertDate() {
      console.log('converting date');
      vm.convertedDate = new Date(vm.dateToConvert);
    }
  }

})();

