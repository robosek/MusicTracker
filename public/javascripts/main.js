/**
 * Created by robert on 02.09.16.
 */
require.config({
   paths:{
       angular:"lib/angular/angular",
       loadingBar:"lib/angular-loading-bar/src/loading-bar",
       route:"lib/angular-route/angular-route",
       bootstrap:"lib/bootstrap/bootstrap",
       c3:"lib/c3",
       d3:"lib/d3",
       jquery:"lib/dist/jquery"
   },
    shim:{
        angular:{
            exports:'angular'
        },
        loadingBar:{
            deps:['angular']
        },
        route:{
            deps:['angular']
        }
    }

});

require(["modules/app","directives/navbar"],function(app){
    app.init();
});