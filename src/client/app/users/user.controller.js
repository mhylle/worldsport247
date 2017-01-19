(function () {
  'use strict';

  angular
    .module('app')
    .controller('UserController', UserController);

  UserController.$inject = ['$rootScope', 'UserService'];

  /* @ngInject */
  function UserController($rootScope, UserService) {
    var vm = this;
    vm.title = 'UserController';

    vm.username = '';
    vm.password = '';
    vm.loggedIn = false;

    vm.login = login;
    vm.logout = logout;
    vm.addSport = addSport;
    vm.addTeam = addTeam;
    vm.setUserPreferences = setUserPreferences;

    activate();

    vm.sizes = [{id: 1, size: '14'}, {id: 2, size: 'S'}, {id: 3, size: 'M'}, {id: 4, size: 'L'}, {
      id: 5,
      size: 'XL'
    }, {id: 6, size: 'XXL'}];

    ////////////////

    function activate() {
      login();
    }


    function login() {
      var user = '';
      var pass = '';

      if (vm.username && vm.password) {
        user = vm.username;
        pass = vm.password;
      } else if ($rootScope.user) {
        user = $rootScope.user.username;
        pass = $rootScope.user.password;
      }

      UserService.login(user, pass).then(function (response) {
        console.log('Response' + response);
        if (response && response.message) {
          console.log(response.message);
          vm.loggedIn = false;
          $rootScope.user = null;
        } else if (response) {
          $rootScope.user = response;

          if ($rootScope.user) {
            if (!$rootScope.user.preferences) {
              console.log('No user prefs');
              $rootScope.user.preferences = {};
            }
            vm.loggedIn = true;
          } else {
            vm.loggedIn = false;
          }
        }
      });
    }

    function logout() {
      $rootScope.user = null;
      vm.loggedIn = false;
    }

    function addSport() {

    }

    function addTeam() {

    }

    function setUserPreferences() {
      UserService.setUserPreferences($rootScope.user).then(function (response) {
        console.log('Response: ' + response);
      });
    }
  }

})();
