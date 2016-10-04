define(['modules/app','services/imageService'],function(app,service){
   
    var imageService;
    
    describe("Image service specification", () => {
       
        beforeEach(module("musicApp"));
        beforeEach(inject((_imageService_) => {
            imageService = _imageService_;
        }));
        
      it("It should return true", () => {
            expect(4 < 5).toBe(true);
        });
        

    });
    
});