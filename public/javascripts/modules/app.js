/**
 * Created by robert on 06.09.16.
 */
define(["angular","loadingBar","route","animate","table","sanitize","carousel"],function(angular){
    var app = angular.module("musicApp",["angular-loading-bar","ngRoute","ngAnimate","ngTable","ngSanitize","angular-carousel"]);
    app.init = function(){
        angular.bootstrap(document,["musicApp"]);
    };
    return app;
});
