app.controller('mainCntrl', ['$http', 'httpSvc', function($http, httpSvc){
  const mainCntrl = this;
   mainCntrl.results = [];
   mainCntrl.submitForm = function(query) {
    httpSvc.searchAPI(query).then(function(data){
      mainCntrl.results.push(data.query.search);
      console.log(mainCntrl.results);
    });
  } //end submitForm

  // this.random = function(){
  //   httpSvc.random(function(response){
  //     return response;
  //   }
  // }
}]);
