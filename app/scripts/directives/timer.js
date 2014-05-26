'use strict';

angular.module('Movies.system').directive('timer', function ($interval) {
    return {
        restrict: 'E',
        replace: false,
        scope: {

        },
        link: function (scope, elem, attrs) {

          var loop;
          var interval = (0.7/attrs.count);

          // Start count on hover
          elem.parent().parent().parent().bind('mouseenter', function () {
            countUp();
          });

          // Stop count on leave
          elem.parent().parent().parent().bind('mouseleave', function () {
            clearInterval(loop);
          });

          function countUp () {
              var count = 1;
              // Count up to a number
              loop = $interval(function () {
                  if (count <= attrs.count) {
                      elem.text(count);
                      ++count;
                  }
              }, interval);
            }

        }
    }
});