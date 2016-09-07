define(['modules/app'],function(app){
    
    app.factory("musicHttpService",["$http",function($http){
        
        var _getTopTracks = function(number){
          
             return $http.get("tracks/"+number);
        };
        
        return{
            getTopTracks: _getTopTracks
        }
        
    }]);
    
})