define(['modules/app'],function(app){
   
    app.factory('tableService',['NgTableParams',function(NgTableParams){
        
      var _createTable = function (pageSize,dataSet) {
      var initialParams = {
        count: pageSize,
        sorting: { name: "asc" } 
      };
      var initialSettings = {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        dataset: dataSet
      };
      return new NgTableParams(initialParams, initialSettings);
    }
      
    return{
        createTable:_createTable
    }
        
    }]);
    
    
});