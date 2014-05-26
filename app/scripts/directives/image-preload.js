angular.module('Movies').directive('imgPreload', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        ngClasses: "=",
        ngSrc: '@'
      },
      link: function(scope, elem, attrs) {
        elem.css('opacity', '0');

        // Assign a random delay
        elem.on('load', function() {
            elem.css('opacity', '1');
            elem.addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
            elem.addClass('animated growIn');
        });

        1elem.on('error', function() {
          //
          console.log('image error');
        });

        scope.$watch('ngSrc', function(newVal) {
          //element.removeClass('in');
        });
      }
    };
}]);