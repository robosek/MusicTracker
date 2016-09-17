define(['modules/app','services/musicHttpService','services/tableService','services/imageService']
    ,function(app,muiscHttpService,imageService){
    app.controller("mainController",["$scope","musicHttpService","tableService",'imageService',
        function($scope,musicHttpService,tableService,imageService){

        var noArtistCode = "xxx";

        $scope.error = false;
        $scope.showNotFoundSongs = false;


        $scope.getTracks = function () {
            musicHttpService.getTracks(500).success(function(data){
                $scope.songs = data;
                var songsAreNotEmpty = musicHttpService.itemsAreValid(data);
                $scope.tableParams = tableService.createTable(25,data);
                $scope.showNotFoundSongs = !songsAreNotEmpty;
            }).error(function(error){
                $scope.error = true;
            });
        }

        $scope.getImage = function (song) {
            return imageService.getImage(song,0);
        }

        $scope.getArtistIMDBid = function (artist) {
            if(artist && artist.mbid!=''){
                return artist.mbid;
            }
            else
                return noArtistCode;
        }
        
        $scope.getCurrentRowIndex = function(tableParams, index){
            return ((tableParams.page() - 1) * tableParams.count()) + (index +1);
        };
        
        $scope.searchTrack = function(name){
        if(name){
            musicHttpService.searchTrack(name).success(function(data){
            $scope.songs = data;
            var songsAreNotEmpty = musicHttpService.itemsAreValid(data);
            $scope.tableParams = tableService.createTable(25,data);
            $scope.showNotFoundSongs = !songsAreNotEmpty;
        })
        .error(function(data){
             $scope.error = true;
        });
        }else{
            $scope.getTracks();
        }
        };
        
    }]);  
});