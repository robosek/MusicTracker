/**
 * Created by robert on 02.10.16.
 */
define(['modules/app','controllers/mainController','services/musicHttpService','services/tableService','services/imageService']
    ,function(app,controller,tableService,musicHttpService,imageService) {

    describe("Main controller specification", () => {

        var $scope;
        beforeEach(module("musicApp"));

        beforeEach(inject( ($controller,$rootScope) => {

            $scope = $rootScope.$new();
            $controller("mainController",{
                $scope:$scope
            });

        }));

        it("Should return error equals to false", () =>{
           expect($scope.error).toBe(false)

        });

        it("Should return showNotFoundSongs equals to false", () =>{
            expect($scope.showNotFoundSongs).toBe(false)

        });

        it("Should return artist imdb id", () =>{
            var artist = {
                mbid:'15MBID'
            }
            expect($scope.getArtistIMDBid(artist)).toBe('15MBID')

        });


        it("Should return non artist imdb id when mbid is empty", () =>{
            var artist = {
                mbid:''
            }
            expect($scope.getArtistIMDBid(artist)).toBe('xxx')

        });

        it("Should return non artist imdb id when artist is undefined"  , () =>{

            expect($scope.getArtistIMDBid(undefined)).toBe('xxx')

        });


    });

    }
);
