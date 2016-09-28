define(['modules/app'],function(app){
    
    app.factory("musicHttpService",["$http",function($http){


        var _getTracks = function (number) {
            return $http.get("tracks/"+number);
        }

        var _getTopTracks = function(number){
             return $http.get("toptracks/"+number);
        };
        
        var _searchTrack = function(name){
            return $http.get("tracksByName/"+name);
        };

        var _itemsAreValid = function (items) {
            return items!= undefined && items.length > 0;
        }

        var _getArtistInfo = function(artistIMDBid){
            return $http.get('/artistjson/'+artistIMDBid);
         }

         var _getOnTourStatistics = function () {
             return $http.get('/ontourjson');
         }
        
        return{
            getTopTracks: _getTopTracks,
            searchTrack:_searchTrack,
            getTracks:_getTracks,
            itemsAreValid:_itemsAreValid,
            getArtistInfo : _getArtistInfo,
            getOnTourStatistics:_getOnTourStatistics

        }
    }]);
    
})