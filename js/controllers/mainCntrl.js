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
