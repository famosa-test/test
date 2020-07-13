var controllers = angular.module("famosa");

controllers.controller("HomeController", 
		['$scope', '$location', 'splotService', '$timeout',
		 function ($scope, $location, splotService, $timeout) {

	// splotService in Angular
	$scope.splotService = splotService;

	// list of models
	$scope.$watch('splotService.models', function() {
		$scope.models 	= splotService.models;
	}, true);
		
	// message
	$scope.message 	= "";
	
	splotService.listModels()
		.then(function ( models ) {
    		console.log( models );	
    		$scope.splotService.models = models;
    	},
    	function (data) {
    		$timeout( function() {
	    		$scope.$apply( function() {
	    			$scope.message = "Error Loading Models !";
	    		})
    		});
    	}
    );
	
	$scope.configuratorType = "";

	$scope.view = function ( model ) {
		console.log ( "configuring " + model.name );
		splotService.initModel( model, "viewer" );
	}	
	
	$scope.configure = function ( model ) {
		console.log ( "configuring " + model.name );
		splotService.initModel( model, "tree" );
	}
	
	$scope.configureWithForm = function ( model ) {
		console.log ( "configuring " + model.name );
		splotService.initModel( model, 'form' );
	} 
	
	// Go to the Configurator
	$scope.$on( 'init_viewer', function() {
		$timeout( function() {
			$scope.$apply(function(){
				$location.path("/view");
			});
		});
	});
	
	$scope.$on( 'init_tree', function() {
		$timeout( function() {
			$scope.$apply(function(){
				$location.path("/config");
			});
		});
	});

	$scope.$on( 'init_form', function() {
		$timeout( function() {
			$scope.$apply(function(){
				$location.path("/form-config");
			});
		});
	});

	
}]);