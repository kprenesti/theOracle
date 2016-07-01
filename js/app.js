var app = angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/wiki.html',
        controller: 'mainCntrl as main'
      })
      .state('results', {
        url: '/results',
        templateUrl: 'templates/results.html',
        controller: 'resultsCntrl as resultCntrl'
      })
      .state('articleView', {
        url: '/article',
        templateUrl: 'templates/article.html',
        controller: 'articleCntrl as article'
      });
    }]); //end config
