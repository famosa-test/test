// Splot Service
// Provides access to SPLOT functionality a the back-end
angular.module("famosa")
	.factory("splotService", [
	    '$http', '$rootScope', '$timeout', '$q', 
	    function($http, $rootScope, $timeout, $q) { 
	                        	 
	return {

		// Attributes
		// ==========
		
		title : 'Configurator',
		
		models : [],
		
		model : {
			    "name" : "Loading...",
			    "tree" : {

			      "id" : "loading...",
			      "name" : "Loading...",
			      "type" : "RootFeature",
			      "children" : []
			    },

			    "steps" : [],
			    "constraints" : []

		},
		
		serverUrl: "",
		
		constraints : [],
		
		// Repository
		// ==========		
		
		// list Models in the repository
		listModels : function() {
			
			console.log( "loading list of models" );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {
				
				console.log( "invoking service" );
				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/repository/models'
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					models = response.data;
					resolve( models );
					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
								
			});
		},
	
		// Model
		// =====
		
		initModel : function( modelToLoad, confType ) {

			console.log( "initializing "  + modelToLoad );	
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {
			
				console.log( "invoking service" );
				$http({
					method : 'GET',
					url : encodeURI(serverUrl 
						+ '/famosa.server/repository/model/'						
						+ modelToLoad.uuid
						)
				}).then(function(response) {
										
					// the sever response is ok
					if ( response.data.ok ) {
						console.log( "server response ok")
						resolve( response );
						$timeout( function() {
							$rootScope.$broadcast( 'init_' + confType );
						});	
						
					} else {						
						// error
						console.log( "server response error")
						reject( response );
						
					}
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});
		},
		
		
		loadModel : function() {
					
			console.log( "Loading model" );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/json.fm.egl'
				}).then(function(response) {
					
					// ok
					console.log( "server response ok" );
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_loaded', model );
					});
					
					
				}, function(response) {
					
					// error
					console.log( "server response error" );
					reject( response );
					
				});
			});
		},
						
		select : function ( featureId ) {			
			
			console.log( "selecting "  + featureId );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/select.egl?id=' + featureId
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});
					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});			
		},

		deselect : function ( featureId ) {	
			
			console.log( "deselecting "  + featureId );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/deselect.egl?id=' + featureId
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});
					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});				
		},

		undo : function ( featureId ) {		
			
			console.log( "undoing "  + featureId );	
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/undo.egl?id=' + featureId
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});
					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});			
		},

		changeDecision : function ( featureId ) {		
			
			console.log( "changing decision "  + featureId );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/change-decision.egl?id=' + featureId
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});
					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});				
		},
	
		complete : function ( ) {
			
			console.log( "auto completing" );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/complete.egl'
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});

				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});				

		},		
	
		reset : function ( ) {			
			
			console.log( "reseting" );	
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/reset.egl'
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});

					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});				
		},		
	
		undoLast : function ( ) {
			
			console.log( "undoing last" );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/undo-last.egl'
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					model = response.data.model;
					resolve( model );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});

					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});				
		},
	
		seeAllConstraints : function ( ) {
			
			console.log( "seeing all the constraints" );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/json.constraints.egl'
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					constraints = response.data;
					resolve( constraints );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});

					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});				
		},

		filterConstraints : function ( featureId ) {
			
			console.log( "filtering the constraints using " + featureId );
			// return new Promise( function(resolve, reject) {
			return $q( function(resolve, reject) {

				$http({
					method : 'GET',
					url : serverUrl + '/famosa.server/splot/json.constraints.egl?id=' + featureId
				}).then(function(response) {
					
					// ok
					console.log( "server response ok")
					constraints = response.data;
					resolve( constraints );
					$timeout( function() {
						$rootScope.$broadcast( 'model_changed', model );
					});

					
				}, function(response) {
					
					// error
					console.log( "server response error")
					reject( response );
					
				});
			});						
		}
	
	};	
}]);