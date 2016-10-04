/**
 * Created by robert on 03.10.16.
 */
define(['modules/app','services/musicHttpService'], (app,service) => {

    describe("Music http service specification",() => {
        var musicHttpService, $httpBackend;
        beforeEach(module("musicApp"));

        beforeEach(inject((_musicHttpService_, _$httpBackend_) => {
            musicHttpService = _musicHttpService_;
            $httpBackend = _$httpBackend_;
        }));

        it("Should get 10 top tracks",() =>{

            $httpBackend.whenGET("tracks/").respond((method,url,data,headers) => {
                return [200,"{\"Title\":\"Cher\"}",{}]
            });

            musicHttpService.getTracks(10).success((data,status) => {
                expect(data.Title)
                    .toBe('Cher');
                expect(status)
                    .toBe(200);

            })
            $httpBackend.flush();
        });



    });




});