define(['modules/app'],function(app){
    
    app.factory("musicHttpService",["$http",function($http){
        
        var _getTopTracks = function(number){
             return $http.get("tracks/"+number);
             //return $http.get("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=poland&api_key=xxx&format=json&limit="+number);
             
        };
        
        var _searchTrack = function(name){
            return $http.get("tracksByName/"+name);
            //return $http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+name+"&api_key=xxx&format=json");
        };

        var _tracksAreValid = function (tracks) {
            return tracks!= undefined && tracks.length > 0;
        }
        
        return{
            getTopTracks: _getTopTracks,
            searchTrack:_searchTrack,
            tracksAreValid:_tracksAreValid
        }
    }]);
    
})