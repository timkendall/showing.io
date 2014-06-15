/*
 * Use this directive to open our hacked together modal (probably should have used built in but this will do for now)
 */

'use strict';

angular.module('Movies.system').directive('modal', function ($timeout) {
  return {
    restrict: 'A',
    replace: false,
    templateUrl: '../../views/movie.html',
    link: function (scope, elem, attrs) {
      // Listen for close event
      scope.$on('modal-closing', function () {
        elem.addClass('animated');
        elem.addClass('fadeOut');
        elem.css('display', 'none');
      });

      // Listen for open event
      scope.$on('modal-opening', function () {
        elem.removeClass('fadeOut');

        elem.addClass('animated');
        elem.addClass('fadeIn');
        elem.css('display', 'block');
      });
    }
  }
});