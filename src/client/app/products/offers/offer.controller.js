(function () {
  'use strict';

  angular
    .module('app')
    .controller('OfferController', OfferController)
    .animation('.slide-animation', function () {
      return {
        addClass: function (element, className, done) {
          if (className === 'ng-hide') {
            TweenMax.to(element, 0.5, {autoAlpha: 1, onComplete: done});
          }
          else {
            done();
          }
        },
        removeClass: function (element, className, done) {
          if (className === 'ng-hide') {
            element.removeClass('ng-hide');
            TweenMax.set(element, {autoAlpha: 0});
            TweenMax.to(element, 0.5, {autoAlpha: 1, onComplete: done});
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
      // vm.products = [
      //   {
      //     id: 1,
      //     name: 'Women\'s Core Training Pants',
      //     description: 'At adidas, everything we do is bound by one simple thought: we strive to help you perform ' +
      //     'at your best your success is our ambition your defeat spurs us on to be better.',
      //     price: 123.88,
      //     image: 'images/products/core_training_SL1500.jpg',
      //     color: ['black', 'white'],
      //     keywords: [{name: '100% Other fibers'},
      //       {name: 'Imported'}, {name: 'Made for comfort'}, {name: 'Breathability'}, {name: 'Made for athletes'}]
      //   },
      //   {
      //     id: 2,
      //     name: 'Tesla Men\'s Cool Dry Compression Baselayer Pants Legging Shorts Tights',
      //     description: 'Coolgear shirts & pants are designed for all seasons (not for Warmth).' +
      //     'Find your size on the chart below. ' +
      //     'We recommend selecting one size up. Flat-lock Seams Provides excellent comfort and protection. ' +
      //     'Early recovery After workouts, promotes faster recovery by controlling blood flow and prevents swelling. ',
      //     price: 123.88,
      //     image: 'images/products/tesla_men_cool_dry.jpg',
      //     color: ['black', 'white'],
      //     keywords: [{name: 'We strongly recommend ordering ONE size up what you normally wear.'},
      //       {name: 'Coolgear shirts&pants are designed for all seasons (not for Warmth)'},
      //       {name: '87% polyester-13% spandex. Excellent elasticity with enhanced range of motion.'}]
      //   }
      // ];
      // vm.currentProduct = vm.products[0];
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
