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
