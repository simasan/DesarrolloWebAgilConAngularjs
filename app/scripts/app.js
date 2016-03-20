(function () {
  'use strict';

  angular.module('blog', ['ngRoute', 'blog.controllers', 'blog.templates']);

  function config($locationProvider, $routeProvider) {

    // Pernite que las URLs no lleven el caracter # típico de Angular
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: '../views/post-list.tpl.html',
        controller: 'PostListCtrl',
        controllerAs: 'postlist'
      })
      .when('/post/:postId', {
        templateUrl: '../views/post-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      })
      .when('/new', {
        templateUrl: '../views/post-create.tpl.html',
        controller: 'PostCreateCtrl',
        controllerAs: 'postcreate'
      });
  }

  angular
    .module('blog')
    .config(config);

})();
