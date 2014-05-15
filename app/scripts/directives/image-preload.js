angular.module('Movies').directive('imgPreload', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      scope: {
        ngSrc: '@'
      },
      link: function(scope, element, attrs) {
        element.on('load', function() {
          element.addClass('animated growIn');
        }).on('error', function() {
          //
        });

        scope.$watch('ngSrc', function(newVal) {
          //element.removeClass('in');
        });
      }
    };
}]);