// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-01-21 using
// generator-karma 1.0.1

module.exports = function (config) {
	'use strict';

	config.set({
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// testing framework to use (jasmine/mocha/qunit/...)
		// as well as any additional frameworks (requirejs/chai/sinon/...)
		frameworks: [
			"jasmine"
		],

		// list of files / patterns to load in the browser
		files: [
			// bower:js
			'bower_components/es5-shim/es5-shim.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/materialize/bin/materialize.js',
			'bower_components/angular-materialize/src/angular-materialize.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/ngstorage/ngStorage.js',
			'bower_components/jquery-ui/jquery-ui.js',
			'bower_components/angular-ui-sortable/sortable.js',
			'bower_components/angular-mocks/angular-mocks.js',
			// endbower
			"app/scripts/core/app.js",

			"app/scripts/common/controllers/*.js",

			"app/scripts/common/directives/*.js",

			"app/scripts/common/services/*.js",

			//"app/scripts/common/filters/*.js",
			//
			//"app/scripts/common/factories/*.js",
			//
			"app/scripts/common/routes/*.js",

			"app/scripts/core/controllers/ctrl.main.js",
			"app/scripts/core/controllers/ctrl.taskManager.js",

			"test/spec/**/*.js",

			"app/views/**/*.html"
		],

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 8080,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			"PhantomJS"
		],

		// Which plugins to enable
		plugins: [
			"karma-phantomjs-launcher",
			"karma-jasmine",
			"karma-ng-html2js-preprocessor"
		],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// Uncomment the following lines if you are using grunt's server to run the tests
		// proxies: {
		//   '/': 'http://localhost:9000/'
		// },
		// URL root prevent conflicts with the site root
		// urlRoot: '_karma_'

		preprocessors: {
			"app/views/**/*.html": ["ng-html2js"]
		},

		ngHtml2JsPreprocessor: {
			// If your build process changes the path to your templates,
			// use stripPrefix and prependPrefix to adjust it.
			stripPrefix: "app/",
			moduleName: 'htmlTemplates'
		},
	});
};
