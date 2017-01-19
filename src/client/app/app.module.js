(function () {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap'
  ]).config(['$urlRouterProvider', '$stateProvider', configuration]);

  function configuration($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('bukser', {
        url: '/bukser',
        templateUrl: 'app/products/bukser/bukser.html'
      })
      .state('haetter', {
        url: '/haetter',
        templateUrl: 'app/products/haetter/haetter.html'
      })
      .state('sko', {
        url: '/sko',
        templateUrl: 'app/products/sko/sko.html'
      })
      .state('trojer', {
        url: '/trojer',
        templateUrl: 'app/products/trojer/trojer.html'
      })
      .state('clothes', {
        url: '/clothes',
        templateUrl: 'app/products/clothes.html'
      })
      .state('sport', {
        url: '/sport',
        templateUrl: 'app/products/sport.html'
      })
      .state('brand', {
        url: '/brand',
        templateUrl: 'app/products/brand.html'
      })
      .state('shop', {
        url: '/brand',
        templateUrl: 'app/products/shop.html'
      })
      .state('usersettings', {
        url: '/settings',
        templateUrl: 'app/users/settings.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/home.html'
      });
  }
})();
