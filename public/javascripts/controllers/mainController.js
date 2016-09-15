define(['modules/app','services/musicHttpService','services/tableService'],function(app,muiscHttpService){
    app.controller("mainController",["$scope","musicHttpService","tableService",function($scope,musicHttpService,tableService){

        var imageNotFoundAddress = "../assets/images/noimagefound.jpg";
        
        $scope.error = false;
        $scope.showNotFoundSongs = false;
        
        musicHttpService.getTracks(300).success(function(data){
           $scope.songs = data;
            var songsAreNotEmpty = musicHttpService.tracksAreValid(data);
            $scope.tableParams = tableService.createTable(25,data);
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
        
        $scope.getCurrentRowIndex = function(tableParams, index){
            return ((tableParams.page() - 1) * tableParams.count()) + (index +1);
        };
        
        $scope.searchTrack = function(name,isValid){
        if(isValid){
            musicHttpService.searchTrack(name).success(function(data){
            $scope.songs = data;
            var songsAreNotEmpty = musicHttpService.tracksAreValid(data);
            $scope.tableParams = tableService.createTable(25,data);
            $scope.showNotFoundSongs = !songsAreNotEmpty;
        })
        .error(function(data){
             $scope.error = true;
        });
        }

            
        };
        
    }]);  
});