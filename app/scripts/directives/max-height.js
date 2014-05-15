'use strict';

angular.module('Movies.system').directive('maxHeight', function ($window, $rootScope) {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            ngClasses: "=",
            ngSrc: '@'
        },
        link: function (scope, elem, attrs) {

            // Set initial height based on width
            var height = elem.prop('offsetWidth') / (27/40);
            elem.css('min-height', height + 'px');
            elem.css('max-height', height + 'px');
            // Resize height on width change
            angular.element($window).bind('resize', function () {
                height = elem.prop('offsetWidth') / (27/40);
                elem.css('min-height', height + 'px');
                elem.css('max-height', height + 'px');
                scope.$apply();
            })

            elem.css('opacity', '0');

            elem.on('load', function() {
                elem.css('opacity', '1');
                elem.addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
                elem.addClass('animated growIn');
            }).on('error', function() {
              //
            });

        }
    }
});