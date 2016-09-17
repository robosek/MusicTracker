define(['modules/app'],function (app) {

    app.factory('imageService',function () {

        var imageNotFoundAddress = "../assets/images/noimagefound.jpg";
        var _getImage = function (lastFMObject,imageArrayIndex) {
            var _image = lastFMObject.image[imageArrayIndex]['#text'];
            if(_image === undefined || !_image.startsWith("https")){
                _image = imageNotFoundAddress;
            }
            return _image;
        }

        return {
            getImage:_getImage
        }
    });

});