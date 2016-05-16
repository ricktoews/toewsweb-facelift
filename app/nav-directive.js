/* global angular */
angular.module('app')

.directive('siteNav', function() {
   var menuItems = [
      {
         label: 'Code',
         link: '#'
      },
      {
         label: 'Work',
         link: '#'
      },
      {
         label: 'Bookshelf',
         link: '#'
      },
      {
         label: 'Cool Stuff',
         link: '#'
      }
      ];
   

    return {
        templateUrl: './app/templates/site-nav.html',
        link: function(scope, el, attr) {
          scope.menuItems = menuItems;
          console.log('homeMain scope', scope.menuItems);

        }
    }
})
;