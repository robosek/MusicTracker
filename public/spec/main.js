/**
 * Created by robert on 02.10.16.
 */
require.config({

    paths:{
        'jasmine':'lib/jasmine-core/lib/jasmine-core/jasmine',
        'jasmine-html':'lib/jasmine-core/lib/jasmine-core/jasmine-html',
        'jasmine-boot':'lib/jasmine-core/lib/jasmine-core/boot',
        angular:"../javascripts/lib/angular/angular",
        mocks:"../javascripts/lib/angular-mocks/angular-mocks",
        loadingBar:"../javascripts/lib/angular-loading-bar/src/loading-bar",
        route:"../javascripts/lib/angular-route/angular-route",
        animate:"../javascripts/lib/angular-animate/angular-animate",
        table:"../javascripts/lib/ng-table/dist/ng-table",
        sanitize:"../javascripts/lib/angular-sanitize/angular-sanitize",
        touch:"../javascripts/lib/angular-touch/angular-touch.min",
        carousel:"../javascripts/lib/angular-carousel/dist/angular-carousel.min",
        c3:"../javascripts/lib/c3/c3",
        d3:"../javascripts/lib/d3/d3",
        'modules/app':'../javascripts/modules/app',
        'services/musicHttpService':'../javascripts/services/musicHttpService',
        'services/imageService': '../javascripts/services/imageService',
        'services/tableService':'../javascripts/services/tableService',
        'services/chartService':'../javascripts/services/chartService',
        'controllers/mainController':"../javascripts/controllers/mainController",
        'controllers/artistController':"../javascripts/controllers/artistController",
        'controllers/statisticController':"../javascripts/controllers/statisticController",

    },
    shim:{
        angular:{
            exports:'angular'
        },
        c3:{
            exports:'c3',
            deps:['d3']
        },
        'jasmine-html':{
            deps:['jasmine']
        },
        'jasmine-boot':{
            deps:['jasmine','jasmine-html']
        },
        mocks:{
            deps:['angular']
        },
        route:{
            deps:['angular']
        },
        loadingBar:{
            deps:['angular']
        },
        animate:{
            deps:['angular']
        },
        table:{
            deps:['angular']
        },
        sanitize:{
            deps:['angular']
        },
        touch:{
            deps:['angular']
        },
        carousel:{
            deps:['angular','touch']
        },
        'modules/app':{
            deps:['angular','mocks','loadingBar','route','table','animate','sanitize','touch','carousel']
        }
    }
});


require(['jasmine-boot'],function(boot){

    require(['hello_test.spec.js','controllers_specs/mainController.spec',
            'controllers_specs/artistController.spec','controllers_specs/statisticController.spec','services_specs/imageService.spec']
        ,function(test){
        window.onload();
    });

});
