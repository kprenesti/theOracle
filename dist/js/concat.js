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
}]);

angular.module('app')
.factory('setData', function(){
  return {
    storeData : function(data){
    var list = data.query.pages;
    this.articles = [];
    for(prop in list){
      this.articles.push(list[prop]);
    }
    return this.articles;
    }
  }
});

app.controller('articleCntrl', ['results', function(results){
  var articleContent = this;
  articleContent.listData = results.returnResults();
  console.log('From the articleCntrl: ', articleContent.list);

}]);

app.controller('mainCntrl', ['$http', 'httpSvc', 'setData', '$state', function($http, httpSvc, setData, $state){
  var main = this;
  //  main.results = [];
   main.submitForm = function(query) {
    httpSvc.searchAPI(query).then(function(data){
      setData.storeData(data);
      console.log(setData.articles);
      $state.go('results');
    }); //end .then
}; //end submitForm()

}]);

angular.module('app').controller('resultsCntrl', ['$state', 'setData', function($state, setData){
  var vm = this;
  vm.data = setData;
  vm.articles = vm.data.articles;
}]);
