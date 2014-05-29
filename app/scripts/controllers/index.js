'use strict';

angular.module('Movies.system').controller('IndexCtrl', ['$scope', '$http', '$location', 'Global', function ($scope, $http, $location, Global) {
    $scope.global = Global;

    $scope.movies = [];
    $scope.current = null;

    // List classes for random delays
    $scope.classes = [
      'delay-20ms',
      'delay-30ms',
      'delay-40ms',
      'delay-50ms'
    ];

    $scope.getTrailers = function (id) {
      console.log('getting links')
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '/clips.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          $scope.current.trailers = data;
          console.log($scope.current.trailers)

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(data)
        });
    }

    $scope.closeMenu = function () {
      $scope.$broadcast('menu-closing');
    }

    $scope.openMenu = function () {
      $scope.$broadcast('menu-opening');
    }

    $scope.closeModal = function () {
      $scope.$broadcast('modal-closing');
    }

    $scope.openModal = function (id) {
      $scope.$broadcast('modal-opening');

      // Find correct movie
      /*
      $scope.movies.forEach(function (elem, index, array) {
        if (elem.id === id)  {
          // Set current
          $scope.current = $scope.movies[index];

          // Grab current's trailers
          //$scope.getTrailers($scope.current.id);
          console.log('boom set current')
        }
      });*/

      for (var i = 0; i < $scope.movies.length; ++i) {
        if ($scope.movies[i].id === id) {
          $scope.current = $scope.movies[i];

          $scope.getTrailers($scope.current.id);
          break;
        }
      }

    }

    // Highlight current tab
    $scope.isActive = function (view) {
      return ( '/' + view ) === $location.path();
    };

    $scope.clearMovies = function () {
      $scope.movies = [];
    }

    $scope.getPlaying = function () {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          $scope.movies = data.movies;
          $scope.current = data.movies[0];

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.getOpening = function () {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          $scope.movies = data.movies;

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.getUpcoming = function () {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          $scope.movies = data.movies;

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

}]);