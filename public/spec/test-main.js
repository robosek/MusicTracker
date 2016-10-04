var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    //var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(file)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/public/spec',

      paths:{
        angular:"../javascripts/lib/angular/angular",
        mocks:"../javascripts/lib/angular-mocks/angular-mocks",
        loadingBar:"../javascripts/lib/angular-loading-bar/src/loading-bar",
        route:"../javascripts/lib/angular-route/angular-route",
        animate:"../javascripts/lib/angular-animate/angular-animate",
        table:"../javascripts/lib/ng-table/dist/ng-table",
        sanitize:"../javascripts/lib/angular-sanitize/angular-sanitize",
        touch:"../javascripts/lib/angular-touch/angular-touch",
        carousel:"../javascripts/lib/angular-carousel/dist/angular-carousel",
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
    },


  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})
