/**
 * Created by robert on 06.09.16.
 */
define(["angular","loadingBar","route","animate","table"],function(angular){
    var app = angular.module("musicApp",["angular-loading-bar","ngRoute","ngAnimate","ngTable"]);
    app.init = function(){
        angular.bootstrap(document,["musicApp"]);
    };
    return app;
});
