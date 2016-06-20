var app = angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/wiki.html',
        controller: 'mainCntrl as mainCntrl'
      })
      .state('results', {
        url: '/results',
        templateUrl: 'templates/results.html',
        controller: 'resultsCntrl as resultsCntrl'
      })
      .state('articleView', {
        url: '/article',
        templateUrl: 'templates/article.html',
        controller: 'articleCntrl as articleCntrl'
      });
    }); //end config
