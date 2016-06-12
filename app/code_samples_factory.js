angular.module('samplesApp', [])
.factory('getcodesamples', function($http) {
    return function() {
        var url = 'https://toewsweb-rest.herokuapp.com/rest.php/codesamples';
        return $http.get(url)
          .then(function(res) {
            var data = res.data;
            console.log('retrieved data', data);
            return data.data;
          });
    };
});
