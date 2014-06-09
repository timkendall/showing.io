'use strict';

angular.module('Movies.system').directive('ratometer', function ($timeout) {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            ngClasses: "="
        },
        link: function (scope, elem, attrs) {
            // On hover of entire element, fill rating
            elem.parent().parent().parent().bind('mouseenter', function () {
                // Adjust postion to create fill effect
                elem.css('background-position', '0% '+ (100 - attrs.ratometer) + '%');
                 // Fill in heart based on percent
                elem.css('background-image', 'linear-gradient(to top, #d52b19 ' + attrs.ratometer + '%, rgba(0,0,0,0.0) ' + attrs.ratometer + '%)');
                elem.css('background-image', '-moz-linear-gradient(to top, #d52b19 ' + attrs.ratometer + '%, rgba(0,0,0,0.0) ' + attrs.ratometer + '%)');
                elem.css('background-image', '-ms-linear-gradient(to top, #d52b19 ' + attrs.ratometer + '%, rgba(0,0,0,0.0) ' + attrs.ratometer + '%)');
                elem.css('background-image', '-o-linear-gradient(to top, #d52b19 ' + attrs.ratometer + '%, rgba(0,0,0,0.0) ' + attrs.ratometer + '%)');
            });

            elem.parent().parent().parent().bind('mouseleave', function () {
                // Adjust back
                elem.css('background-position', '0% 0%');
                // Fill in heart based on percent
                $timeout(function () {
                  elem.css('background-image', 'none');
                }, 100);
            });
        }
    }
});