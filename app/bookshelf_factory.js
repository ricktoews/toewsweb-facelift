angular.module('bookshelfApp', [])
.factory('getbooks', function($http) {
    return function(shelf) {
        var url = 'https://toewsweb-rest.herokuapp.com/rest.php/goodreads/' + shelf;
        return $http.get(url)
          .then(function(res) {
            var data = res.data;
            console.log('retrieved data', data);
            return data.data;
          });
    };
});
