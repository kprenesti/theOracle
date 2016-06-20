app.controller('mainCntrl', ['$http', function($http){
  const mainCntrl = this;
  this.submitForm = function() {
    console.log(mainCntrl.query);
  }
}]);
