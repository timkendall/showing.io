'use strict';

angular.module('Movies.system').controller('IndexCtrl', ['$scope', '$http','Global', function ($scope, $http, Global) {
    $scope.global = Global;

    // List classes for random delays
    $scope.classes = [
      'delay-20ms',
      'delay-30ms',
      'delay-40ms',
      'delay-50ms'
    ];

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=hj3r7yx59y8j6z6wvrv3r65a&limit=20&callback=JSON_CALLBACK').
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(data.found);
      $scope.movies = data.movies;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });


    //  $http({method: 'GET', url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=202daf17374de192b4c6c8d0ee8d1bc8'}).

}]);