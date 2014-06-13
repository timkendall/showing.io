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

        // Generate a new image to watch
        var bgImg = new Image(),
          imageLocation = attrs.backgroundImage;
          bgImg.src = imageLocation;

        //elem.parent().css('opacity', '0');


        bgImg.onload = function () {
            // Assign a random delay for animation
            elem.parent().addClass(scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);

            // Set loaded image as background
            elem.css({'background-image': 'url(' + imageLocation +')'});
            elem.parent().css('opacity', '1');

            elem.parent().addClass('animated flipInY');
            elem.parent().parent().removeClass('loading');

            // Get dominant color
        };

      }
    };
}]);