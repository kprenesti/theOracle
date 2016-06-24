app.controller('mainCntrl', ['$http', 'httpSvc', 'results', '$state', function($http, httpSvc, results, $state){
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
      results.list = resultsArray;
      console.log(results.list);
    });
    $state.go('results');
  } //end submitForm

  main.getRandom = function(){
    $state.go('article');
  }
}]);
