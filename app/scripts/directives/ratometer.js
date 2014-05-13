'use strict';

angular.module('Movies.system').directive('ratometer', function () {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            ngClasses: "="
        },
        link: function (scope, elem, attrs) {

            // Fill in heart based on percent
            elem.css('background-image', 'linear-gradient(to top, #d52b19 ' + attrs.ratometer + '%, rgba(0,0,0,0.0) ' + attrs.ratometer + '%)');
        }
    }
});