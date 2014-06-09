'use strict';

angular.module('Movies.system').directive("ngRandomClass", function () {
    return {
        restrict: 'EA',
        replace: false,
        scope: {
            ngClasses: "="
        },
        link: function (scope, elem, attr) {

            //Add random background class to selected element
            elem.addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
        }
    }
});