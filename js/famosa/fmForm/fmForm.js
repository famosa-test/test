angular.module( "famosa" )
	.directive('fmForm',  function() {	
		return {
			
			restrict: 'E',
			scope: {
				model: '='
			},		
			
			templateUrl: 'js/famosa/fmForm/fmForm.html',
			
		};	
		}
	);

angular.module( "famosa" )
	.directive('fmFormField',  [ 'RecursionHelper', 'splotService', '$rootScope', function(RecursionHelper, splotService, $rootScope) {	
		return {
			
			restrict: 'E',
			scope: {
				'feature': '=',
				'widget': '='
			},		
			
			templateUrl: 'js/famosa/fmForm/fmFormField.html',
	
			compile: function(element) {
		            return RecursionHelper.compile(element, function(scope, element, attrs, controller, transcludeFn){

		            	// select		            	
		            	scope.select = function() {
		            		splotService.select( scope.feature.id )
		            		.then(
		            			function(){ scope.$digest(); } 
		            		);
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
		            	
		            });
			 }
		}
	}]);