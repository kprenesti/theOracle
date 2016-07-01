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

app.controller('articleCntrl', ['results', function(results){
  var articleContent = this;
  articleContent.listData = results.returnResults();
  console.log('From the articleCntrl: ', articleContent.list);

}]);

app.controller('mainCntrl', ['$http', 'httpSvc', 'setData', '$state', function($http, httpSvc, setData, $state){
  var main = this;
  //  main.results = [];
   main.submitForm = function(query) {
    httpSvc.searchAPI(query)
    .then(function(data){
      var resultsArray = [];
      var articles = data.query.pages;
      for (var prop in articles){
        resultsArray.push(articles[prop]);
      }
      setData.storeData(resultsArray);
    });
    $state.go('results');
  } //end submitForm

  main.getRandom = function(){
    $state.go('articleView');
  };
}]);

angular.module('app').controller('resultsCntrl', ['$state', 'setData', function($state, setData){
  var List = this;
  List.results = setData.getData();
  console.log('From the resultsCntrl: ', List.results);
}]);
