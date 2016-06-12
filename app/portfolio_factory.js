angular.module('portfolioApp', [])
.factory('getportfolio', function($http) {
    return function() {
        var url = 'https://toewsweb-rest.herokuapp.com/rest.php/portfolio';
        return $http.get(url)
          .then(function(res) {
            var data = res.data;
            console.log('retrieved data', data);
            return data.data;
          });
    };
});
