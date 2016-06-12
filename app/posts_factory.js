angular.module('postsApp', [])
.factory('getposts', function($http) {
    return function(shelf) {
        var url = 'https://toewsweb-rest.herokuapp.com/rest.php/posts';
        return $http.get(url)
          .then(function(res) {
            var data = res.data;
            var toc = [];
            _.each(data.data, function(title, key) { toc.push({file: key, title: title});});
            return toc;
          });
    };
});
