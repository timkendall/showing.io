'use strict';

angular.module('Movies.system').directive('readMore', function ($timeout) {
    return {
        restrict: 'A',
        replace: false,
        scope: {},
        link: function (scope, elem, attrs) {
            // Change text based on truncation
            scope.$on('truncating-text', function () {
              if (scope.current.textLength === 9999) {
                elem.text('Show less');
              } else {
                elem.text('Show more');
              }
            });
        }
    }
});