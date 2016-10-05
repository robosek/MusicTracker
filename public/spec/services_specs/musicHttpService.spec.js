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

        it("Should get 2 tracks",() =>{
            $httpBackend.whenGET("tracks/2").respond((method,url,data) => {
                return [200,"[{\"Title\":\"Cher\"},{\"Title\":\"Nirvana\"}]",{}]
            });
            
            musicHttpService.getTracks(2).success((data,status) => {
                expect(data.length)
                    .toBe(2)
                expect(data[0].Title)
                    .toBe('Cher');
                expect(status)
                    .toBe(200);
            });
            $httpBackend.flush();
        });
        
          it("Should get 2 top tracks",() =>{
            $httpBackend.whenGET("toptracks/2").respond((method,url,data) => {
                return [200,"[{\"Title\":\"Cher\"},{\"Title\":\"Nirvana\"}]",{}]
            });
            
            musicHttpService.getTopTracks(2).success((data,status) => {
                expect(data.length).toBe(2)
                expect(data[1].Title)
                    .toBe('Nirvana');
                expect(status)
                    .toBe(200);
            });
            $httpBackend.flush();
        });
        
        it("Should find tracks by key word",() =>{
            $httpBackend.whenGET("tracksByName/Cher").respond((method,url,data) => {
                return [200,"[{\"Title\":\"Cher\"},{\"Title\":\"Chery\"}]",{}]
            });
            
            musicHttpService.searchTrack("Cher").success((data,status) => {
                expect(data.length).toBe(2)
                expect(data[1].Title)
                    .toBe('Chery');
                expect(status)
                    .toBe(200);
            });
            $httpBackend.flush();
        });
        
        
        it("Should find tracks by key word",() =>{
            $httpBackend.whenGET("tracksByName/Cher").respond((method,url,data) => {
                return [200,"[{\"Title\":\"Cher\"},{\"Title\":\"Chery\"}]",{}]
            });
            
            musicHttpService.searchTrack("Cher").success((data,status) => {
                expect(data.length).toBe(2)
                expect(data[1].Title)
                    .toBe('Chery');
                expect(status)
                    .toBe(200);
            });
            $httpBackend.flush();
        });
        
        it("Should get info about artist",() =>{
                
            $httpBackend.whenGET("/artistjson/123vfsdf2").respond((method,url,data) => {
                return [200,"{\"Title\":\"Cher\",\"Description\": \"Some description\"}",{}]
            });
            musicHttpService.getArtistInfo("123vfsdf2").success((data,status) => {
                expect(data.Title)
                    .toBe('Cher');
                 expect(data.Description)
                    .toBe('Some description');
                expect(status)
                    .toBe(200);
            });
            $httpBackend.flush();
        });

        
          it("Should get statistics info",() =>{
                
            $httpBackend.whenGET("/ontourjson").respond((method,url,data) => {
                return [200,"{\"1\":\"60\",\"0\": \"80\"}",{}]
            });
            musicHttpService.getOnTourStatistics().success((data,status) => {
                expect(data["1"])
                    .toBe("60");
                 expect(data["0"])
                    .toBe("80");
                expect(status)
                    .toBe(200);
            });
            $httpBackend.flush();
        });
        
         it("Should return true when items are valid",() =>{
                
            var artists = "[{\"Title\":\"Cher\"},{\"Title\":\"Chery\"}]";
            var validItems = musicHttpService.itemsAreValid(artists);
             expect(validItems).toBe(true);
        });
        
          it("Should return false when items length less then 1",() =>{
                
            var artists = new Array();
            var validItems = musicHttpService.itemsAreValid(artists);
             expect(validItems).toBe(false);
        });
        
          it("Should return false when items length less then 1",() =>{
                
            var artists = new Array();
            var validItems = musicHttpService.itemsAreValid(artists);
             expect(validItems).toBe(false);
        });
        
           it("Should return false when items are undefined",() =>{
                
            var artists = undefined;
            var validItems = musicHttpService.itemsAreValid(artists);
             expect(validItems).toBe(false);
        });

    });




});