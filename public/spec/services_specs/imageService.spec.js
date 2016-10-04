/**
 * Created by robert on 03.10.16.
 */
define(['modules/app','services/imageService'], (app,service) => {

    var imageService;

    var mockLastFMObject;



        describe("Image service specification", function () {

        beforeEach(module("musicApp"));
        beforeEach(inject(function (_imageService_) {
            imageService = _imageService_;
            mockLastFMObject =
            {
                id: "xxx",
                artist: {
                    name: "Earth",
                    mbid: "e7220fad-efdc-46af-a95b-338b46a901c9",
                    url: "https://www.last.fm/music/Earth",
                    image: [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/4e83bdf38238414790102fbbe1a2aee8.png",
                            size: "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/4e83bdf38238414790102fbbe1a2aee8.png",
                            size: "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/4e83bdf38238414790102fbbe1a2aee8.png",
                            size: "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4e83bdf38238414790102fbbe1a2aee8.png",
                            size: "extralarge"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/4e83bdf38238414790102fbbe1a2aee8.png",
                            size: "mega"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/arQ/4e83bdf38238414790102fbbe1a2aee8.png",
                            size: ""
                        }
                    ]
                }
            }

        }));


        it("Should return first (the smallest) image url address", () => {
            var imageUrl = imageService.getImage(mockLastFMObject.artist,0);
            expect(imageUrl).toBe("https://lastfm-img2.akamaized.net/i/u/34s/4e83bdf38238414790102fbbe1a2aee8.png");
        });

        it("Should return second image url address", () => {
             var imageUrl = imageService.getImage(mockLastFMObject.artist,1);
             expect(imageUrl).toBe("https://lastfm-img2.akamaized.net/i/u/64s/4e83bdf38238414790102fbbe1a2aee8.png");
         });

         it("Should return default image url (image not found)", () => {
                var imageUrl = imageService.getImage(mockLastFMObject.artist,10);
                expect(imageUrl).toBe("../assets/images/noimagefound.jpg");
          });

         it("Should return default image url (image not found) when object is undefined", () => {
                var imageUrl = imageService.getImage(undefined,1);
                expect(imageUrl).toBe("../assets/images/noimagefound.jpg");
         });

    })

})
>>>>>>> 271c94679bdade926184b79cbf04321d7afb518e
