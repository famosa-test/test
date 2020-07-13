// FaMoSA Client

// Declare the Angular application and their dependencies
var app = angular.module('famosa', [
   'ngRoute',
   'ui.bootstrap',
   'ui.layout', 
   'RecursionHelper', 
   'ngLoadingSpinner'
]);

// define the routes
app.config(['$routeProvider', function ($routeProvider) {
	
	// login
	$routeProvider.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginController'

	// home 
	}).when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
			
	// view
	}).when('/view', {
		templateUrl: 'views/view.html',
		controller: 'famosaViewer'

			
	// configurator
	}).when('/config', {
		templateUrl: 'views/config.html',
		controller: 'famosaConfigurator'

	// form configurator
	}).when('/form-config', {
		templateUrl: 'views/formConfig.html',
		controller: 'famosaFormConfigurator'
			
			
	// otherwise
	}).otherwise({
       redirectTo: '/login'
    });

}]);