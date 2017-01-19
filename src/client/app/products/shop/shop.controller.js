(function () {
  'use strict';

  angular
    .module('app')
    .controller('ShopController', ShopController);

  ShopController.$inject = [];

  /* @ngInject */
  function ShopController() {
    var vm = this;
    vm.title = 'ShopController';
    vm.products = [];
    vm.seletedProduct = {};

    vm.topLFirst = 0;
    vm.topLSecond = 1;
    vm.topLThird = 2;
    vm.topRFirst = 0;
    vm.topRSecond = 1;
    vm.topRThird = 2;
    vm.bottomLFirst = 0;
    vm.bottomLSecond = 1;
    vm.bottomLThird = 2;
    vm.bottomRFirst = 0;
    vm.bottomRSecond = 1;
    vm.bottomRThird = 2;
    vm.switchProduct = switchProduct;

    vm.previous = previous;
    vm.next = next;
    vm.productIndex = 0;
    vm.rackPosition = 0;
    activate();

    ////////////////

    function activate() {
      vm.products = [
        {
          name: 'pants',
          type: 'pants',

          imageTopLeft: ['images/Rack pictures/pantsTopLeft.jpg', 'images/Rack pictures/capsTopLeft.jpg',
            'images/Rack pictures/shirtTopLeft.jpg', 'images/Rack pictures/pantsTopLeft.jpg'],
          imageTopRight: ['images/Rack pictures/pantsTopRight.jpg', 'images/Rack pictures/capsTopRight.jpg',
            'images/Rack pictures/shirtTopRight.jpg', 'images/Rack pictures/pantsTopRight.jpg'],
          imageBottomLeft: ['images/Rack pictures/pantsButtomLeft.jpg', 'images/Rack pictures/capsButtomLeft.jpg',
            'images/Rack pictures/shirtButtomLeft.jpg', 'images/Rack pictures/pantsButtomLeft.jpg'],
          imageBottomRight: ['images/Rack pictures/pantsButtomRight.jpg', 'images/Rack pictures/pantsButtomRight.jpg',
            'images/Rack pictures/pantsButtomRight.jpg', 'images/Rack pictures/pantsButtomRight.jpg']
        },
        {
          name: 'caps',
          type: 'caps',
          imageTopLeft: ['images/Rack pictures/pantsTopLeft.jpg', 'images/Rack pictures/capsTopLeft.jpg',
            'images/Rack pictures/shirtTopLeft.jpg', 'images/Rack pictures/capsTopLeft.jpg'],
          imageTopRight: ['images/Rack pictures/pantsTopRight.jpg', 'images/Rack pictures/capsTopRight.jpg',
            'images/Rack pictures/shirtTopRight.jpg', 'images/Rack pictures/capsTopRight.jpg'],
          imageBottomLeft: ['images/Rack pictures/capsButtomLeft.jpg'],
          imageBottomRight: ['images/Rack pictures/capsButtomRight.jpg']
        },
        {
          name: 'shirts',
          type: 'shirts',
          imageTopLeft: ['images/Rack pictures/shirtTopLeft.jpg'],
          imageTopRight: ['images/Rack pictures/shirtTopRight.jpg'],
          imageBottomLeft: ['images/Rack pictures/shirtButtomLeft.jpg'],
          imageBottomRight: ['images/Rack pictures/shirtButtomRight.jpg']
        }
      ];
      vm.seletedProduct = vm.products[vm.productIndex];
    }

    function previous() {
      vm.rackPosition--;
    }

    function next() {
      vm.rackPosition++;
    }

    function activate2() {
      vm.products = [
        {
          name: 'pants',
          type: 'pants',

          imageTopLeft: 'images/Rack pictures/pantsTopLeft.jpg',
          imageTopRight: 'images/Rack pictures/pantsTopRight.jpg',
          imageBottomLeft: 'images/Rack pictures/pantsButtomLeft.jpg',
          imageBottomRight: 'images/Rack pictures/pantsButtomRight.jpg'
        },
        {
          name: 'caps',
          type: 'caps',
          imageTopLeft: 'images/Rack pictures/capsTopLeft.jpg',
          imageTopRight: 'images/Rack pictures/capsTopRight.jpg',
          imageBottomLeft: 'images/Rack pictures/capsButtomLeft.jpg',
          imageBottomRight: 'images/Rack pictures/capsButtomRight.jpg'
        },
        {
          name: 'shirts',
          type: 'shirts',
          imageTopLeft: 'images/Rack pictures/shirtTopLeft.jpg',
          imageTopRight: 'images/Rack pictures/shirtTopRight.jpg',
          imageBottomLeft: 'images/Rack pictures/shirtButtomLeft.jpg',
          imageBottomRight: 'images/Rack pictures/shirtButtomRight.jpg'
        }
      ];
      vm.seletedProduct = vm.products[vm.productIndex];
    }

    function switchProduct() {
      if (vm.productIndex === vm.products.length - 1) {
        vm.productIndex = 0;
      } else {
        vm.productIndex++;
      }
      vm.seletedProduct = vm.products[vm.productIndex];
    }
  }

  /*
   <img ng-src="images/Rack pictures/capsTopLeft.jpg" width="200px" style="vertical-align: bottom"
   <span><img ng-src="images/Rack pictures/capsTopLeft.jpg" width="150px" style="vertical-align: bottom" /></span>
   <span><img ng-src="images/Rack pictures/capsTopLeft.jpg" width="100px" style="vertical-align: bottom" /></span>
   <span>Tilbud</span>
   <span><img ng-src="images/Rack pictures/capsTopRight.jpg" width="100px" style="vertical-align: bottom" /></span>
   <span><img ng-src="images/Rack pictures/capsTopRight.jpg" width="150px" style="vertical-align: bottom" /></span>
   <span><img ng-src="images/Rack pictures/capsTopRight.jpg" width="200px" style="vertical-align: bottom" /></span>
   </div>
   <div >
   <span><img ng-src="images/Rack pictures/capsButtomLeft.jpg" width="200px" style="vertical-align: top" /></span>
   <span><img ng-src="images/Rack pictures/capsButtomLeft.jpg" width="150px" style="vertical-align: top" /></span>
   <span><img ng-src="images/Rack pictures/capsButtomLeft.jpg" width="100px" style="vertical-align: top" /></span>
   <span>Tilbud</span>
   <span><img ng-src="images/Rack pictures/capsButtomRight.jpg" width="100px" style="vertical-align: top" /></span>
   <span><img ng-src="images/Rack pictures/capsButtomRight.jpg" width="150px" style="vertical-align: top" /></span>
   <span><img ng-src="images/Rack pictures/capsButtomRight.jpg" width="200px" style="vertical-align: top" /></span>
   */

})();
