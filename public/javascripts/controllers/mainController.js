define(['modules/app','services/musicHttpService'],function(app,muiscHttpService){
    app.controller("mainController",["$scope","musicHttpService",function($scope,musicHttpSerice){
        
        $scope.error = false;
        musicHttpSerice.getTopTracks(100).success(function(data){
           $scope.songs = data;
        }).error(function(error){
            $scope.error = true;
        });
        
    }]);  
});