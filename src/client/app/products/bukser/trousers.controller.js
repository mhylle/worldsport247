(function () {
  'use strict';

  angular
    .module('app')
    .controller('TrousersController', TrousersController);

  TrousersController.$inject = ['TrousersService'];

  /* @ngInject */
  function TrousersController(TrousersService) {
    var vm = this;
    vm.title = 'TrousersController';

    vm.trousers = [];
    vm.filteredTrousers = [];
    vm.currentTrousers = [];

    vm.selectedDetailImage = 0;
    vm.page = 1;
    vm.itemsOnPage = 4;
    vm.numberOfPages = 0;
    vm.getTrousers = getTrousers;
    vm.nextPage = nextPage;
    vm.previousPage = previousPage;
    vm.showInformation = showInformation;
    vm.showProductImage = showProductImage;
    vm.productImageType = 'detailProductImage';
    vm.filterret = filterret;
    vm.doFilter = doFilter;
    vm.filteredBrand = 'Adidas';
    vm.brand = {
      adidas: 'btn-default',
      puma: 'btn-info',
      hummel: 'btn-info',
      nike: 'btn-info'
    };

    activate();

    ////////////////

    function filterret(brand) {
      return vm.brand[brand];
    }

    function doFilter(brand) {
      var theBrand = vm.brand[brand];
      if (theBrand === 'btn-info') {
        theBrand = 'btn-default';
      } else {
        theBrand = 'btn-info';
      }
      vm.brand[brand] = theBrand;
    }

    function activate() {
      getTrousers();
    }

    function showProductImage() {
      if (vm.productImageType === 'detailProductImage') {
        vm.productImageType = 'detailProductImage detailProductImageClicked';
      } else {
        vm.productImageType = 'detailProductImage';
      }

    }

    function nextPage() {

      if (vm.page < vm.numberOfPages) {
        vm.page++;
        populateCurrentTrousers();
      }
    }

    function previousPage() {
      if (vm.page > 1) {
        vm.page--;
        populateCurrentTrousers();
      }
    }

    function getTrousers() {
      TrousersService.getTrousers().then(function (response) {
        if (!response) {
          vm.trousers = [];
        } else {
          vm.trousers = response;
          populateCurrentTrousers();
        }
      });
    }

    function populateCurrentTrousers() {
      var itemStart = (vm.page - 1) * vm.itemsOnPage;
      var itemEnd = vm.page * vm.itemsOnPage;
      vm.numberOfPages = Math.ceil(vm.trousers.length / vm.itemsOnPage);
      vm.currentTrousers = [];
      vm.currentTrousers = vm.trousers.slice(itemStart, itemEnd);

    }

    function showInformation(model) {
      vm.model = model;
    }
  }

})();
