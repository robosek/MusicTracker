define(['modules/app'],function (app) {

    app.factory('imageService',function () {

        function validObject(lastFMObject, imageArrayIndex){
            return lastFMObject && lastFMObject.image && lastFMObject.image.length > imageArrayIndex;
        }

        var imageNotFoundAddress = "../assets/images/noimagefound.jpg";

        var _getImage = function (lastFMObject,imageArrayIndex) {
            if(validObject(lastFMObject,imageArrayIndex)){
                var _image = lastFMObject.image[imageArrayIndex]['#text'];
                if(!_image || !_image.startsWith("https")){
                    _image = imageNotFoundAddress;
                }
            }
            else{
                _image = imageNotFoundAddress;
            }
            return _image;
        }

        return {
            getImage:_getImage
        }
    });



});