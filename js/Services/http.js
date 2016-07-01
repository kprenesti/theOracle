angular.module('app')
  .service('httpSvc', ['$http', '$q', function($http, $q){
    var httpSvc = this;
    httpSvc.searchAPI = function(query){
      var defer = $q.defer();
      var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=2&exlimit=max&gsrsearch=';
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
}])

.service('setData', [function(){
  var setter = this;
  setter.list = [];
  setter.storeData = function(array){
    array.forEach(function(item){
      setter.list.push(item);
    });
    return setter.list;
    // console.log('From setter.storeData: ', setter.list);
    // console.log('setData service type is ', setter);
  }
  setter.getData = function(){
    console.log('From setter.getData: ',setter.list);
  }
  return setter;
}]);

// .service('getData', ['setData', function(setData){
//   var getter = this;
//   getter.returnResults = function(obj){
//     console.log('From the setData.returnResults(): ', obj.list );
//     return obj.list;
//   };
// }]);
