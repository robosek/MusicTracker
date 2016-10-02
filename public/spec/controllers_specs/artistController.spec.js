/**
 * Created by robert on 02.10.16.
 */
define(['modules/app','controllers/artistController','services/musicHttpService','services/imageService'],
    function(app,controller,musicHttpService) {

        describe("Artist controller specification", () => {

                var $scope;
                beforeEach(module("musicApp"));

                beforeEach(inject(($controller, $rootScope) => {

                    $scope = $rootScope.$new();
                    $controller("artistController", {
                        $scope: $scope
                    });

                }));

            it("Should return error equals to false", () =>{
                expect($scope.error).toBe(false)

            });

            it("Should return showNotFoundArtist equals to false", () =>{
                    expect($scope.showNotFoundArtist).toBe(false)

            });

            it("Should return yes when artist ontour is 1", () =>{

                var artist = {
                    ontour:1
                };

                expect($scope.isOnTourText(artist)).toBe("Yes")

            });

            it("Should return no when artist ontour is 0", () =>{

                var artist = {
                    ontour:0
                };

                expect($scope.isOnTourText(artist)).toBe("No")

            });

            it("Should return undefined when artist is undefined", () =>{

                expect($scope.isOnTourText(undefined)).toBe(undefined)

            });

            it("Should return green color when when artist ontour is 1", () =>{

                var artist = {
                    ontour:1
                };

                expect($scope.isOnTourColor(artist)).toBe("green")

            });

            it("Should return light red color when when artist ontour is 0", () =>{

                var artist = {
                    ontour:0
                };

                expect($scope.isOnTourColor(artist)).toBe("#e7c3c3")

            });

            it("Should return undefined color when when artist ontour is undefined", () =>{

                var artist = {
                    ontour:undefined
                };

                expect($scope.isOnTourColor(artist)).toBe(undefined)

            });

            it("Should return undefined color when artist is undefined", () =>{

                expect($scope.isOnTourColor(undefined)).toBe(undefined)

            });

            }
        );

    });
