/**
 * Created by robert on 06.09.16.
 */
define(["angular","loadingBar","route"],function(angular){
    var app = angular.module("musicApp",["angular-loading-bar","ngRoute"]);
    app.init = function(){
        angular.bootstrap(document,["musicApp"]);
    };
    return app;
});
