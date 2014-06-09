'use strict';

angular.module('Movies.system').directive('timer', function ($interval) {
    return {
        restrict: 'E',
        replace: false,
        scope: {

        },
        link: function (scope, elem, attrs) {

          var loop,
           count = attrs.count,
           interval = (400 / count);

          // Start count on hover
          elem.parent().parent().parent().bind('mouseenter', function () {
            countUp();
          });

          function countUp () {
            var total = 1;

            (function loop() {
                setTimeout(function () {
                    /* logic to execute here */
                    if (total <= attrs.count) {
                      elem.text(total);
                      ++total;
                    }
                  loop();
                }, interval);
            })();
        }
      }
    }
});