'use strict';

//Setting up route
angular.module('Movies').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/playing', {
            templateUrl: 'views/playing.html'
        }).
        when('/opening', {
            templateUrl: 'views/opening.html'
        }).
        when('/upcoming', {
            templateUrl: 'views/upcoming.html'
        }).
        when('/:id', {
            templateUrl: 'views/movie.html'
        }).
        otherwise({
            redirectTo: '/playing'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('Movies').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);