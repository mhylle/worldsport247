(function () {
  'use strict';

  angular
    .module('app')
    .controller('NavbarController', NavbarController)
    .run(function ($rootScope) {
      angular.element(document).on('click', function (e) {
        $rootScope.$broadcast('documentClicked', angular.element(e.target));
      });
    });

  NavbarController.$inject = ['$rootScope'];

  /* @ngInject */
  function NavbarController($rootScope) {
    var vm = this;
    vm.title = 'NavbarController';
    vm.brandVisible = false;
    vm.goodsVisible = false;
    vm.sportVisible = false;

    vm.toggleBrand = toggleBrand;
    vm.toggleGoods = toggleGoods;
    vm.toggleSport = toggleSport;
    activate();

    ////////////////

    function activate() {
      $rootScope.$on('documentClicked', function (inner, target) {
        vm.brandVisible = false;
        vm.sportVisible = false;
        vm.goodsVisible = false;
      });

    }

    function toggleBrand() {
      vm.brandVisible = !vm.brandVisible;
      vm.goodsVisible = false;
      vm.sportVisible = false;
    }

    function toggleGoods() {
      vm.brandVisible = false;
      vm.goodsVisible = !vm.goodsVisible;
      vm.sportVisible = false;
    }

    function toggleSport() {
      vm.brandVisible = false;
      vm.goodsVisible = false;
      vm.sportVisible = !vm.sportVisible;

    }
  }

})();

