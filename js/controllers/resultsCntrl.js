angular.module('app').controller('resultsCntrl', ['$state', 'results', function($state, results){
  var List = this;
  List.results = results.returnResults();
  console.log(List.results);
}]);
