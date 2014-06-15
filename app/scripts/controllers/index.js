'use strict';

angular.module('Movies.system').controller('IndexCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location, Global) {
    $scope.global = Global;
    $scope.movies = [];
    $scope.current = {};

    // For sorting (release/rating)
    $scope.order = '-ratings.audience_score';

    // List classes for random delays
    $scope.classes = [
      'delay-20ms',
      'delay-30ms',
      'delay-40ms',
      'delay-50ms'
    ];

    // Helper function for truncate directive
    $scope.changeLength = function(synopsis) {
      $scope.$broadcast('truncating-text');
      synopsis.textLength = 9999;
    }

    $scope.getTrailers = function(id) {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '/clips.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
        $scope.current.trailers = data;
      }).
      error(function(data, status, headers, config) {});
    }

    // Open/close events
    $scope.closeMenu = function() {
      $scope.$broadcast('menu-closing');
    }

    $scope.openMenu = function() {
      $scope.$broadcast('menu-opening');
    }

    $scope.closeModal = function() {
      $scope.$broadcast('modal-closing');
    }

    // Modal helper function, set current movie and get its trailers
    $scope.openModal = function(id) {
      $scope.$broadcast('modal-opening');

      // Find correct movie
      $scope.movies.forEach(function(elem, index, array) {
        if (elem.id === id) {
          // Set current
          $scope.current = elem;
          // Grab current's trailers
          $scope.getTrailers($scope.current.id);
        }
      });
    }

    // Helper function, highlight current tab
    $scope.isActive = function(view) {
      return ('/' + view) === $location.path();
    };

    // Helper function, clear $scope.movies to avoid seeing old data (can improve this)
    $scope.clearMovies = function() {
      $scope.movies = [];
    }

    $scope.getPlaying = function() {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
        $scope.movies = data.movies;
      }).
      error(function(data, status, headers, config) {
        // Should handle errors...
      });
    };

    $scope.getOpening = function() {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
        $scope.movies = data.movies;

      }).
      error(function(data, status, headers, config) {
        // Should handle errors...
      });
    };

    $scope.getUpcoming = function() {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
        $scope.movies = data.movies;
        // Get genres (unfortuanetly have to may second API call b.c. genere field was left out of data)

      }).
      error(function(data, status, headers, config) {
        // Should handle errors...
      });
    };

    // Helper function, get Twitter share count
    $http.jsonp('http://urls.api.twitter.com/1/urls/count.json?url=http://showing.io/&callback=JSON_CALLBACK').
    success(function(data, status, headers, config) {
      $scope.count = data.count;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  }
]);