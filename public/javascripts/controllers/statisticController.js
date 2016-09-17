/**
 * Created by robert on 10.09.16.
 */
define(['modules/app','services/musicHttpService','services/chartService'],
    function(app,musicHttpService,chartService){

    app.controller('statisticController',["$scope","musicHttpService","chartService"
        ,function($scope,musicHttpService,chartService){
            $scope.songsNumber = 15;
            $scope.error = false;
            $scope.showNotFoundSongs = false;

            musicHttpService.getTopTracks($scope.songsNumber).success(function(data){
                $scope.songs = data;
                var songsAreNotEmpty = musicHttpService.itemsAreValid(data);
                $scope.showNotFoundSongs = !songsAreNotEmpty;
                chartService.generateBarChart(data);
            }).error(function(error){
                $scope.error = true;
            });

        }]);

});
