var app = angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/search.html',
        controller: 'mainCntrl as main'
      })
      .state('results', {
        url: '/results',
        templateUrl: 'templates/results.html',
        controller: 'resultsCntrl as results'
      })
      .state('articleView', {
        url: '/article/:id',
        templateUrl: 'templates/article.html',
        controller: 'articleCntrl as article'
      });
    }]); //end config
