/* global angular */
angular.module('app')

.directive('homeMain', function() {
   return {
       templateUrl: './app/templates/home-main.html',
       link: function(scope, el, attr) {
       }
   } 
});

console.log('home-main-directive.js loaded');