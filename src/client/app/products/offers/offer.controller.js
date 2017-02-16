(function () {
  'use strict';

  angular
    .module('app')
    .controller('OfferController', OfferController)
    .animation('.slide-animation', function () {
      return {
        addClass: function (element, className, done) {
          if (className === 'ng-hide') {
            element.css('opacity', 1);
              jQuery(element).animate({
                  opacity: 0,duration: 400
              }, done);
          }
          else {
            done();
          }
        },
        removeClass: function (element, className, done) {
          if (className === 'ng-hide') {
            element.removeClass('ng-hide');
              element.css('opacity', 0);
              jQuery(element).animate({
                  opacity: 1, duration: 400
              }, done);
          }
          else {
            done();
          }
        }
      };
    });

  OfferController.$inject = ['$interval', 'OfferService'];

  /* @ngInject */
  function OfferController($interval, OfferService) {
    var vm = this;
    vm.title = 'OfferController';

    vm.slideInterval = 5000;
    vm.noWrapSlides = false;
    vm.active = 0;

    vm.slides = [];
    vm.currentIndex = 0;

    vm.currentProduct = {
      name: '',
      description: '',
      price: 0,
      image: ''
    };

    vm.limitedOffer = {};

    vm.setCurrentSlideIndex = setCurrentSlideIndex;
    vm.isCurrentSlideIndex = isCurrentSlideIndex;
    activate();

    ////////////////

    function activate() {
      getOffer();

      var stop;
      stop = $interval(function () {
        next();
      }, 5000);

      getLimitedOffer();
    }

    function previous() {
      if (vm.currentIndex === 0) {
        vm.currentIndex = vm.data.length - 1;
      } else {
        vm.currentIndex--;
      }
      vm.selectedData = vm.data[vm.currentIndex];
    }

    function next() {
      if (vm.currentIndex === vm.products.length - 1) {
        vm.currentIndex = 0;
      } else {
        vm.currentIndex++;
      }
      vm.selectedData = vm.products[vm.currentIndex];
    }

    function setCurrentSlideIndex(index) {
      vm.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
      return vm.currentIndex === index;
    }

    function getLimitedOffer() {
      return OfferService.getLimitedOffer().then(function (response) {
        vm.limitedOffer = response;
        var expires = vm.limitedOffer.expires;

        vm.limitedOffer.daysToExpiration = expires;
        vm.limitedOffer.hoursToExpiration = 0;
        vm.limitedOffer.minutesToExpiration = 0;
        vm.limitedOffer.secondsToExpiration = 0;
        startCountdown();
      });
    }

    function getOffer() {
      return OfferService.getOffer().then(function (response) {
        vm.products = response;
        vm.currentProduct = vm.products[0];
      });
    }

    function startCountdown() {
      var stop = $interval(function () {
        if (vm.limitedOffer.secondsToExpiration === 0) {
          vm.limitedOffer.secondsToExpiration = 59;
          if (vm.limitedOffer.minutesToExpiration === 0) {
            vm.limitedOffer.minutesToExpiration = 59;
            if (vm.limitedOffer.hoursToExpiration === 0) {
              vm.limitedOffer.hoursToExpiration = 23;
              vm.limitedOffer.daysToExpiration--;
            } else {
              vm.limitedOffer.hoursToExpiration--;
            }
          } else {
            vm.limitedOffer.minutesToExpiration--;
          }
        } else {
          vm.limitedOffer.secondsToExpiration--;
        }
      }, 1000);
    }
  }
})();
