angular.module('app').controller('resultsCntrl', ['$state', 'setData', function($state, setData){
  var List = this;
  List.results = setData.getData();
  console.log('From the resultsCntrl: ', List.results);
}]);
