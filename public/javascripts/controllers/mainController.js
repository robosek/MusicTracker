define(['modules/app','services/musicHttpService'],function(app,muiscHttpService){
    app.controller("mainController",["$scope","musicHttpService",function($scope,musicHttpService){

        var imageNotFoundAddress = "../assets/images/noimagefound.jpg";
        
        $scope.error = false;
        $scope.showNotFoundSongs = false;
        
        musicHttpService.getTopTracks(100).success(function(data){
           $scope.songs = data;
            //$scope.songs = data.tracks.track;
            var songsAreNotEmpty = musicHttpService.tracksAreValid(data);
           $scope.showNotFoundSongs = !songsAreNotEmpty;
        }).error(function(error){
            $scope.error = true;
        });

        $scope.getImage = function (song) {
            var _image = song.image[0]['#text'];
            if(_image === undefined || !_image.startsWith("https")){
                _image = imageNotFoundAddress;
            }
            return _image;
        }
        
        $scope.searchTrack = function(name){
            musicHttpService.searchTrack(name).success(function(data){
            $scope.songs = data;
            //$scope.songs = data.results.trackmatches.track;
            var songsAreNotEmpty = musicHttpService.tracksAreValid(data);
            $scope.showNotFoundSongs = !songsAreNotEmpty;
        })
        .error(function(data){
             $scope.error = true;
        });
        };

    }]);  
});