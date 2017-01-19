(function () {
  'use strict';

  angular
    .module('app')
    .controller('FavoritesController', FavoritesController);

  FavoritesController.$inject = ['$rootScope', 'UserService'];

  /* @ngInject */
  function FavoritesController($rootScope, UserService) {
    var vm = this;
    vm.title = 'FavoritesController';

    vm.addFavorite = addFavorite;
    vm.removeFavorite = removeFavorite;
    vm.addWish = addWish;
    vm.removeWish = removeWish;

    vm.favorites = [];
    vm.wishes = [];
    vm.sports = [];
    vm.teams = [];
    vm.favorite = {};
    vm.idCounter = 0;
    ////////////////
    activate();
    function activate() {
      retrieveSports();
      retrieveTeams();
      retrieveFavorites();
      retrieveWishes();
    }

    function retrieveSports() {
      UserService.getSports().then(function (response) {
        vm.sports = response;
      });
    }

    function retrieveTeams() {
      UserService.getTeams().then(function (response) {
        vm.teams = response;
      });
    }

    function retrieveFavorites() {
      UserService.getFavorites().then(function (response) {
        vm.favorites = response;
      });
    }

    function addFavorite(favorite) {
      console.log(favorite);

      favorite.id = vm.idCounter++;
      UserService.addFavorite(vm.favorite).then(function (response) {
        console.log(response.favorite);
        vm.favorites.push(response.favorite);
      });
    }

    function removeFavorite(favorite) {
      UserService.removeFavorite(favorite).then(function (response) {
        if (response && response.length) {
          vm.favorites = response;
        } else {
          vm.favorites = [];
        }

      });
    }

    function retrieveWishes() {
      UserService.getWishes().then(function (response) {
        vm.wishes = [];
        for (var i = 0; i < response.length; i++) {
          var id = response[i].id;
          UserService.getWish(id).then(function(response) {
            if (response) {
              var type = response.type;
              if (type === 'pants') {
                var sizePreference = $rootScope.user.preferences.size.pants;
                response.size = sizePreference;
              }
              vm.wishes.push(response);
            }
          });
        }
        // vm.wishes = response;
      });
    }

    function addWish(wish) {
      wish.id = vm.idCounter++;
      console.log(wish);
      UserService.addWish(wish).then(function (response) {
        console.log(response.wish);
        vm.wishes.push(response.wish);
      });
    }

    function removeWish(wish) {
      UserService.removeWish(wish).then(function (response) {
        vm.wishes = response.wishes;
      });
    }
  }
})();
