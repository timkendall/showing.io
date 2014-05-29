angular.module('Movies').directive('imgPreload', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        ngClasses: "=",
        ngSrc: '@'
      },
      link: function(scope, elem, attrs) {
        // Show loading
        elem.parent().parent().addClass('loading');

        elem.parent().css('opacity', '0');

        // Assign a random delay
        elem.on('load', function () {
            elem.parent().css('opacity', '1');
            elem.parent().addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
            elem.parent().addClass('animated flipInY');
            elem.parent().parent().removeClass('loading');

            //var image = new Image;
            //image.src = attrs.ngSrc;

            // Get dominant color
        });

        elem.on('error', function() {
          //
          console.log('image error');
        });

        scope.$watch('ngSrc', function(newVal) {
          //element.removeClass('in');
        });
      }
    };
}]);