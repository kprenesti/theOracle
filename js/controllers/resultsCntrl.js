angular.module('app').controller('resultsCntrl', ['$state', 'setData', function($state, setData){
  var vm = this;
  vm.data = setData;
  vm.articles = vm.data.articles;
}]);
