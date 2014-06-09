'use strict';

angular.module('Movies.system').directive('menu', function ($timeout) {
    return {
        restrict: 'A',
        replace: false,
        scope: {
        },
        link: function (scope, elem, attrs) {
            // Listen for close event
           scope.$on('menu-closing', function () {
            elem.parent().addClass('split80');
            elem.parent().removeClass('split200');
           });

           // Listen for open event
           scope.$on('menu-opening', function () {
            elem.parent().addClass('split200');
            elem.parent().removeClass('split80');
           });

           // Listen for close event
           scope.$on('modal-closing', function () {
            elem.parent().removeClass('blured');
           });

           // Listen for open event
           scope.$on('modal-opening', function () {
            elem.parent().addClass('blured');
           });
        }
    }
});