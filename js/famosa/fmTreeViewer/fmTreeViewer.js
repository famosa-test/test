angular.module( "famosa" )
	.directive('fmTreeViewer',  function() {	
		return {
			
			restrict: 'E',
			scope: {
				model: '='
			},		
			
			templateUrl: 'js/famosa/fmTreeViewer/fmTreeViewer.html',
			
		};	
		}
	);

angular.module( "famosa" )
	.directive('fmNodeViewer',  [ 
	        'RecursionHelper', 'splotService', '$rootScope', '$timeout', 
	        function(RecursionHelper, splotService, $rootScope, $timeout) {
	        	
		return {
			
			restrict: 'E',
			scope: {
				'feature': '='
			},		
			
			templateUrl: 'js/famosa/fmTreeViewer/fmNodeViewer.html',
	
			compile: function(element) {
		            return RecursionHelper.compile(element, function(scope, element, attrs, controller, transcludeFn){

		            	// expandCollapse
		            	scope.expandCollapse = function() {
		            		if (scope.feature.closed == true ) {
		            			scope.feature.closed = false; 
		            		} else {
		            			scope.feature.closed = true;
		            		}
		            	}
		            	
		            	// select		            	
		            	scope.select = function() {
		            		splotService.select( scope.feature.id );
		            	}
		            	
		            	// deselect
		            	scope.deselect = function() {
		            		splotService.deselect( scope.feature.id );
		            	}

		            	// undo
		            	scope.undo = function() {
		            		splotService.undo( scope.feature.id );
		            	}

		            	// change decision
		            	scope.changeDecision = function() {
		            		console.log( "trying to change decision " + scope.feature.id  );
		            		splotService.changeDecision( scope.feature.id );
		            	}
		            	
		            	// filter constraints
		            	scope.filterConstraints = function() {
		            		console.log( "trying to filter the constraints" + scope.feature.id  );
		            		splotService.filterConstraints( scope.feature.id );
		            	}
		            	
		            });
			 }
		}
	}]);

angular.module( "famosa" )
	.directive('configStepsViewer',  [ 'splotService', function( splotService ) {	
		return {
			
			restrict: 'E',
			scope: {
				model: '='
			},		
			
			templateUrl: 'js/famosa/fmTreeViewer/configStepsViewer.html',
			
			link: function (scope, element, attrs) {

				scope.reset = function() {
					splotService.reset();
				}

				scope.complete = function() {
					splotService.complete ();
				}

            	// undo
            	scope.undo = function( id ) {
            		splotService.undo( id );
            	}

				scope.undoLast = function() {
					splotService.undoLast();
				}
				
			}
		};	
	}]);

angular.module( "famosa" )
	.directive('fmConstraintsViewer', [ 'splotService', function( splotService ) {	
		return {
			
			restrict: 'E',
			scope: {
				constraints: '='
			},		
			
			templateUrl: 'js/famosa/fmTreeViewer/fmConstraintsViewer.html',
			
			link: function (scope, element, attrs) {
			
				// filter constraints
            	scope.seeAllConstraints = function() {
            		console.log( "trying to see all the constraints" );
            		splotService.seeAllConstraints();
            	}
				
			}
				
		};	
	}]);