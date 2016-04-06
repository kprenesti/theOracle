var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/',
        {
          templateUrl:'templates/wiki.html',
          controller: 'mainCntrl'
        })

        .otherwise({redirectTo:'/'});
      } //end routeProvider callback function
    ]); //end config
