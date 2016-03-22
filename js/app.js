var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/',
        {
          templateUrl:'home.html',
          controller: 'mainCntrl'
        })
        .when('/Google',{
          templateUrl:'templates/google.html',
          controller: 'googleCntrl'
        })
        .when('/Wiki',{
          templateUrl:'templates/wiki.html',
          controller: 'wikiCntrl'
        })
        .when('/Dictionary', {
          templateUrl: 'templates/dictionary.html',
          controller: 'dictionaryCntrl'
        })
        .otherwise({redirectTo:'/'});
      } //end routeProvider callback function
    ]); //end config
