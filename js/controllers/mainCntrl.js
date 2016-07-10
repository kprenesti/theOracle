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
