define(['modules/app','services/musicHttpService'],function(app,muiscHttpService){
    app.controller("mainController",["$scope","musicHttpService",function($scope,musicHttpSerice){

        var imageNotFoundAddress = "../assets/images/noimagefound.jpg";

        $scope.error = false;
        musicHttpSerice.getTopTracks(100).success(function(data){
           $scope.songs = data;
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

    }]);  
});