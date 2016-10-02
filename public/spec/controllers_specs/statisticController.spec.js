/**
 * Created by robert on 02.10.16.
 */
define(['modules/app','controllers/statisticController','services/musicHttpService','services/chartService'],
    function(app,statisticController,musicHttpService,chartService) {


        describe("Statistic controller specification", () => {

            var $scope;
            beforeEach(module("musicApp"));
            beforeEach(inject(($controller, $rootScope) => {

                $scope = $rootScope.$new();
                $controller("statisticController", {
                    $scope: $scope
                });

            }));

            it("Should return error equals to false", () =>{
                expect($scope.error).toBe(false)

            });

            it("Should return showNotFoundSongs equals to false", () =>{
                expect($scope.showNotFoundSongs).toBe(false)

            });



            it("Should return showNotFoundSongs equals to false", () =>{
                expect($scope.showNotFoundOnTour).toBe(false)

            });


        })
    });