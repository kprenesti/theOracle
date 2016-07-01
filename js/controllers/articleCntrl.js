app.controller('articleCntrl', ['results', function(results){
  var articleContent = this;
  articleContent.listData = results.returnResults();
  console.log('From the articleCntrl: ', articleContent.list);

}]);
