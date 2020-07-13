// Controller for the Configurator
// provides data and event handlers for the tree-based configurator
angular.module( "famosa" )
	.controller('famosaConfigurator', 
			[ '$scope', '$http', '$rootScope', '$location', 'splotService', '$timeout', 
			  function($scope, $http, $rootScope, $location, splotService, $timeout) {

				
		// Resize panels
		// =============
		
		$scope.ResizeFn = function (e) {
			console.log("resize called");  
		};
		
		// Find features
		// =============
		
		$scope.findFeature = function( feature, id  ) {				
			if ( feature.id == id ) {
				return feature
			} else {
				for ( var child in feature.children ) {
					var found = $scope.findFeature( feature.children[child], id );
					if ( found ) return found;
				}
			}
			return null;
		};

		// Attributes
		// ==========
		
		// splotService in Angular
		$scope.splotService = splotService;

		// title of the Feature Model
		$scope.$watch('splotService.title', function() {
			$scope.title 	= splotService.title;
		}, true);
		
		// Feature Model being configured
		$scope.$watch('splotService.model', function() {
			$scope.model 	= splotService.model;
		}, true);		
		
		// Constraints visible to the users
		$scope.$watch('splotService.model.constraints', function() {
			if (typeof splotService.model != "undefined" ){
				$scope.constraints 	= splotService.model.constraints;
			} else {
				$scope.constraints 	= [];
			}			
		}, true);				

		
		// Interaction to server
		// =====================
			
		$scope.loadModel = function ( ) {
			splotService.loadModel().then(function( model ) {
				$scope.splotService.model = model;
			});
		};
							
		$scope.select = function ( featureId ) {			
			splotService.select( featureId );	
		};

		$scope.deselect = function ( featureId ) {			
			splotService.deselect( featureId );
		};

		$scope.undo = function ( featureId ) {
			splotService.undo( featureId );
		};

		$scope.changeDecision = function ( featureId ) {
			splotService.changeDecision( featureId );
		};
		
		$scope.complete = function ( ) {
			splotService.complete();
		};		
		
		$scope.reset = function ( ) {			
			splotService.reset();
		};		
		
		$scope.undoLast = function ( ) {
			splotService.undoLast();
		};
		
		$scope.seeAllConstraints = function ( ) {
			splotService.seeAllConstraints();
		}

		$scope.filterConstraints = function ( featureId ) {
			splotService.filterConstraints();
		}

		// Init the model
		// ==============
		
		$scope.loadModel();
		
		// Update the model
		$scope.$on( 'model_loaded', function(ev, model) {
			$scope.splotService.model = model;
		});
		
		$scope.$on( 'model_changed', function(ev, model) {
			$scope.splotService.model = model;
		});
						
		
		// Other buttons
		// =============
		
		$scope.goHome = function() {
			$location.path("/home");
		}
}]);

