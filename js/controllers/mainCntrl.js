app.controller('mainCntrl', ['$http', 'httpSvc', 'setData', '$state', function($http, httpSvc, setData, $state){
  var main = this;
  //  main.results = [];
   main.submitForm = function(query) {
    httpSvc.searchAPI(query).then(function(data){
      setData.storeData(data);
      console.log(setData.articles);
    }); //end .then
    $state.go('results');
}; //end submitForm()

  main.getRandom = function(){
    $state.go('articleView');
  };
}]);
