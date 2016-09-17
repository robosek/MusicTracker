/**
 * Created by robert on 17.09.16.
 */
define(['modules/app','services/musicHttpService'],function(app,musicHttpService){
    app.controller('artistController',['$scope','musicHttpService',function($scope,musicHttpService){
                  $scope.error = false;

                   $scope.getArtistInfo = function(imdbId){
                        musicHttpService.getArtistInfo(imdbId).success(function(data){
                              $scope.artist = data[0];
                           }).error(function(error){
                                $scope.error = true;
                           });
                   };
                   $scope.isOnTourText = function(artist){
                       if(artist){
                                return artist.ontour == 0 ? "No" : "Yes";
                           }
                   }

               $scope.isOnTourColor = function(artist){
                          if(artist){
                              return artist.ontour == 0 ? "#e7c3c3" : "green";
                                }
                        }

                }])

    });