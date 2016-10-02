/**
 * Created by robert on 17.09.16.
 */
define(['modules/app','services/musicHttpService','services/imageService'],function(app,musicHttpService){
    app.controller('artistController',['$scope','musicHttpService','imageService','$sce',
        function($scope,musicHttpService,imageService,$sce){

            $scope.error = false;
            $scope.showNotFoundArtist = false;

            $scope.getArtistInfo = function(imdbId){
                musicHttpService.getArtistInfo(imdbId).success(function(data){
                    $scope.showNotFoundArtist = !musicHttpService.itemsAreValid(data);
                    $scope.artist = data[0];
                    if($scope.artist){
                        $scope.artistDescriptionHtml = $sce.trustAsHtml($scope.artist.bio.summary);
                    }

                }).error(function(error){
                    $scope.error = true;
                });
            };

            $scope.isOnTourText = function(artist){
                if(artist && artist.ontour != undefined){
                  return artist.ontour == 0 ? "No" : "Yes";
                }
            }

            $scope.getImage = function (artist,index) {
                if(artist){
                    return imageService.getImage(artist,index);
                }
            }


            $scope.isOnTourColor = function(artist){
                if(artist && artist.ontour != undefined){
                    return artist.ontour == 0 ? "#e7c3c3" : "green";
                }
            }

     }])

    });