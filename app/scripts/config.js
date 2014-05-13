'use strict';

//Setting up route
angular.module('Movies').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/theaters', {
            templateUrl: '../views/theaters.html'
        }).
        when('/opening', {
            templateUrl: '../views/opening.html'
        }).
        when('/upcoming', {
            templateUrl: '../views/upcoming.html'
        }).
        otherwise({
            redirectTo: '/theaters'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('Movies').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);