(function () {
  'use strict';

  angular
    .module('app')
    .factory('UserService', UserService);

  UserService.$inject = ['$rootScope', '$http', '$q'];

  /* @ngInject */
  function UserService($rootScope, $http, $q) {
    var service = {
      login: login,
      getUser: getUser,
      getUsers: getUsers,
      getFavorites: getFavorites,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
      getWishes: getWishes,
      addWish: addWish,
      getWish: getWish,
      removeWish: removeWish,
      getSports: getSports,
      getTeams: getTeams,
      setUserPreferences: setUserPreferences
    };
    return service;

    ////////////////

    function login(username, password) {
      if (!username || !password) {
        var deferred = $q.defer();

        setTimeout(function() {
          deferred.resolve({message: 'Invalid username or password'});
        }, 0);
        return deferred.promise;
      }
      return $http.get('/api/login/' + username + '/' + password)
        .then(onLoginSuccess)
        .catch(onLoginError);

      function onLoginSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onLoginError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }
    function getUser(username, password) {
      return $http.get('/api/users/' + username + '/' + password)
        .then(onGetUserSuccess)
        .catch(onGetUserError);

      function onGetUserSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetUserError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }

    function getUsers() {
      return $http.get('/api/users')
        .then(onGetUserSuccess)
        .catch(onGetUserError);

      function onGetUserSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return [];
      }

      function onGetUserError(error) {
        // Logger.error('Error during getUser: ' + error);
        return [];
      }
    }

    function getSports() {
      return $http.get('/api/sports/')
        .then(onGetSportsSuccess)
        .catch(onGetSportsError);

      function onGetSportsSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetSportsError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }

    function getTeams() {
      return $http.get('/api/teams/')
        .then(onGetTeamsSuccess)
        .catch(onGetTeamsError);

      function onGetTeamsSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetTeamsError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }

    function getFavorites() {
      if ($rootScope.user) {
        return $http.get('/api/users/' + $rootScope.user.id + '/favorites')
          .then(onGetFavoritesSuccess)
          .catch(onGetFavoritesError);
      } else {
        return $q(function (resolve) {
          resolve([]);
        });
      }
      function onGetFavoritesSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetFavoritesError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }

    function addFavorite(favorite) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      var item = {favorite: favorite};
      console.log(item);
      return $http.post('/api/users/favorites', {user: $rootScope.user.id, item: item}, config)
        .then(onAddFavoriteSuccess)
        .catch(onAddFavoriteError);

      function onAddFavoriteSuccess(response) {
        console.log(response.data);
        return response.data;
      }

      function onAddFavoriteError(error) {
        console.log(error);
      }
    }

    function removeFavorite(favorite) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http.delete('/api/users/favorites', {user: $rootScope.user.id, favorite: favorite}, config)
        .then(onRemoveFavoriteSuccess)
        .catch(onRemoveFavoriteError);

      function onRemoveFavoriteSuccess(response) {
        console.log(response.data);
        return response.data;
      }

      function onRemoveFavoriteError(error) {
        console.log(error);
      }
    }

    function getWishes() {
      if ($rootScope.user) {
        return $http.get('/api/users/' + $rootScope.user.id + '/wishes')
          .then(onGetWishesSuccess)
          .catch(onGetWishesError);
      }
      else {
        return $q(function (resolve) {
          resolve([]);
        });
      }

      function onGetWishesSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetWishesError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }

    function getWish(id) {
      if ($rootScope.user) {
        return $http.get('/api/users/' + $rootScope.user.id + '/wishes/' + id)
          .then(onGetWishSuccess)
          .catch(onGetWishError);
      }
      else {
        return $q(function (resolve) {
          resolve([]);
        });
      }

      function onGetWishSuccess(response) {
        //Logger.info('getting events, response was ' + response);
        if (response.data) {
          return response.data;
        }
        return null;
      }

      function onGetWishError(error) {
        // Logger.error('Error during getUser: ' + error);
        return null;
      }
    }

    function addWish(wish) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http.post('/api/users/wishes', {user: $rootScope.user.id, wish: wish}, config)
        .then(onAddWishSuccess)
        .catch(onAddWishError);

      function onAddWishSuccess(response) {
        console.log(response.data);
        return response.data;
      }

      function onAddWishError(error) {
        console.log(error);
      }
    }
    function setUserPreferences(user) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http.post('/api/users/' + $rootScope.user.id + '/preferences', {preferences: user.preferences}, config)
        .then(onAddWishSuccess)
        .catch(onAddWishError);

      function onAddWishSuccess(response) {
        console.log(response.data);
        return response.data;
      }

      function onAddWishError(error) {
        console.log(error);
      }
    }

    function removeWish(wish) {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http.delete('/api/users/wishes', {user: $rootScope.user.id, wish: wish}, config)
        .then(onRemoveWishSuccess)
        .catch(onRemoveWishError);

      function onRemoveWishSuccess(response) {
        console.log(response.data);
        return response.data;
      }

      function onRemoveWishError(error) {
        console.log(error);
      }
    }


  }
})();
