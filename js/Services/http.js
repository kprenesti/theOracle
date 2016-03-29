angular.module('app')
  .service('httpSvc', function($http){
    this.httpCall = function(url, config, callback){
      $http.get(url, config).then(callback);
    }
  })
