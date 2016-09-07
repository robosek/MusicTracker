/**
 * Created by robert on 02.09.16.
 */
require.config({
   paths:{
       angular:"lib/angular/angular",
       loadingBar:"lib/angular-loading-bar/src/loading-bar",
       route:"lib/angular-route/angular-route",
       animate:"lib/angular-animate/angular-animate",
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
        },
        animate:{
            deps:['angular']
        }
        
    }

});

require(["modules/app","directives/navbar","directives/alert","services/musicHttpService","controllers/mainController"],function(app){
    app.init();
});