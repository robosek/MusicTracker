// Karma configuration
// Generated on Tue Oct 04 2016 17:49:46 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'public/spec/test-main.js',
      {pattern: 'public/javascripts/lib/angular/angular.js', included: false},
      {pattern: 'public/javascripts/lib/angular-animate/angular-animate.js', included: false},
      {pattern: 'public/javascripts/lib/angular-carousel/dist/angular-carousel.js', included: false},
      {pattern: 'public/javascripts/lib/angular-loading-bar/src/loading-bar.js', included: false},
      {pattern: 'public/javascripts/lib/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'public/javascripts/lib/angular-route/angular-route.js', included: false},
      {pattern: 'public/javascripts/lib/angular-sanitize/angular-sanitize.js', included: false},
      {pattern: 'public/javascripts/lib/angular-touch/angular-touch.js', included: false},
      {pattern: 'public/javascripts/lib/bootstrap/dist/js/bootstrap.js', included: false},
      {pattern: 'public/javascripts/lib/c3/c3.js', included: false},
      {pattern: 'public/javascripts/lib/d3/d3.js', included: false},
      {pattern: 'public/javascripts/lib/jquery/dist/jquery.js', included: false},
      {pattern: 'public/javascripts/lib/ng-table/dist/ng-table.js', included: false},
      {pattern: 'public/javascripts/controllers/*.js', included: false},
      {pattern: 'public/javascripts/directives/*.js', included: false},
      {pattern: 'public/javascripts/modules/*.js', included: false},
      {pattern: 'public/javascripts/services/*.js', included: false},
      {pattern: 'public/javascripts/services/*.js', included: false},
      {pattern: 'public/spec/controllers_specs/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
