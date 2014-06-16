'use strict';

angular.module('Movies.system').directive('readMore', function () {
  return {
    restrict: 'A',
    replace: false,

    link: function (scope, elem, attrs) {
      scope.length = attrs.length;
      // Change text based on truncation

      elem.on('click', function () {
        console.log('click')
        //scope.$apply('changeLength('+ attrs.length +')');
        if (scope.length === 999) {
          scope.length = 10;
        } else {
          scope.length = 999;
        }

      });



    }
  }
});