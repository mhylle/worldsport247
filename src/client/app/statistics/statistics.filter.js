(function () {
  'use strict';

  angular
    .module('app')
    .filter('StatisticsFilter', StatisticsFilter);

  function StatisticsFilter() {
    return StatisticsFilterFilter;

    ////////////////

    function StatisticsFilterFilter(statistics, user) {
      var out = [];
      angular.forEach(statistics, function(statistic) {
        angular.forEach(user.interests, function (interest) {
          if (statistic === interest) {
            out.push(statistic);
          }
        });
      });
      return out;
    }
  }

})();
