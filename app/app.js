require('angular');
require('angular-ui-router');
require('bootstrap');
require('lodash');

angular.module('app', ['bookshelfApp', 'samplesApp', 'portfolioApp', 'postsApp', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/templates/index.tmpl.html'
    })
    .state('bookshelf', {
      url: '/bookshelf',
      templateUrl: 'app/templates/bookshelf.html',
      controller: 'BookshelfCtrl'
    })
    .state('samples', {
      url: '/samples',
      templateUrl: 'app/templates/code-samples.html',
      controller: 'CodeSamplesCtrl'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'app/templates/portfolio.html',
      controller: 'PortfolioCtrl'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'app/templates/posts.html',
      controller: 'PostsCtrl'
    })
    .state('post', {
      url: '/post',
      templateUrl: 'app/templates/posts.html',
      controller: 'PostsCtrl'
    })
    ;

    $urlRouterProvider.otherwise('/');
})

.controller('MainCtrl', function($scope, $state) {
  $scope.go = function(dest) {
    console.log('Navigate to', dest);
    $state.go(dest);
  };
})

.controller('BookshelfCtrl', function($scope, getbooks) {
  getbooks('professional-development').then(function(data) {
    $scope.books = data;
  });
})

.controller('CodeSamplesCtrl', function($scope, getcodesamples) {
  getcodesamples().then(function(data) {
    $scope.samples = data;
  });
})

.controller('PortfolioCtrl', function($scope, getportfolio) {
  getportfolio().then(function(data) {
    $scope.portfolio = data;
  });
})

.controller('PostsCtrl', function($scope, getposts) {
  getposts().then(function(data) {
    $scope.posts = data;
  });
})


;
