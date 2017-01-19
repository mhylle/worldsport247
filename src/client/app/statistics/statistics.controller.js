(function () {
  'use strict';

  angular
    .module('app')
    .controller('StatisticsController', StatisticsController);

  StatisticsController.$inject = ['$rootScope', 'StatisticsService'];

  /* @ngInject */
  function StatisticsController($rootScope, StatisticsService) {
    var vm = this;
    vm.title = 'StatisticsController';

    vm.footBallMatches = getFootballMatches;
    vm.handBallMatches = getHandballMatches;
    vm.tennisMatches = getTennisMatches;

    vm.showSoccer = true;
    vm.showHandball = true;
    vm.showTennis = true;
    activate();

    ////////////////

    function activate() {
      $rootScope.$watch(function watchUser($rootScope) {
        return $rootScope.user;
      }, function handleUserChanges(newValue, oldValue) {
        if (newValue != null) {
          vm.showSoccer = false;
          vm.showHandball = false;
          vm.showTennis = false;
          var interests = $rootScope.user.interests;
          if (interests) {
            for (var i = 0; i < interests.length; i++) {
              var interest = interests[i];
              if ('football' === interest.toLowerCase()) {
                vm.showSoccer = true;
              }
              if ('handball' === interest.toLowerCase()) {
                vm.showHandball = true;
              }
              if ('tennis' === interest.toLowerCase()) {
                vm.showTennis = true;
              }
            }
          } else {
            vm.showSoccer = true;
            vm.showHandball = true;
            vm.showTennis = true;
          }
        } else {
          vm.showSoccer = true;
          vm.showHandball = true;
          vm.showTennis = true;
        }
      });
      getFootballMatches();
      getHandballMatches();
      getTennisMatches();
    }

    function getFootballMatches() {
      StatisticsService.getMatches('football').then(function (response) {
        if (!response) {
          vm.footBallMatches = [];
        } else {
          vm.footBallMatches = response;
        }
      });
    }

    function getHandballMatches() {
      StatisticsService.getMatches('handball').then(function (response) {
        if (!response) {
          vm.handBallMatches = [];
        } else {
          vm.handBallMatches = response;
        }
      });
    }
    function getTennisMatches() {
      StatisticsService.getMatches('tennis').then(function (response) {
        if (!response) {
          vm.tennisMatches= [];
        } else {
          vm.tennisMatches = response;
        }
      });
    }
  }

})();
