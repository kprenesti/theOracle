angular.module('app')
  .service('httpSvc', ['$http', '$q', function($http, $q){
    var httpSvc = this;
    httpSvc.searchAPI = function(query){
      var defer = $q.defer();
      var api = 'http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';
      var cb = '&callback=JSON_CALLBACK';
      $http.jsonp(api + query + cb)
        .then(function(response){
          defer.resolve(response.data);
        }.bind(this), //end success
          function(response){
            defer.reject({error: response.data, status: response.status});
          } //end error
        );//end .then
        return defer.promise;
      }; //end searchAPI
  return httpSvc;
}]);
