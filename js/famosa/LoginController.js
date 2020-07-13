angular.module("famosa")
	.controller("LoginController", 
			['$scope', '$location', '$window',
			 function ($scope, $location, $window) {

	// login form fields
	$scope.login 	= "";
	$scope.password = "";
	$scope.remember = false;
	
	$scope.message 	= "";
		
	// doLogin event handler
	$scope.doLogin = function ( ) {
		$scope.message = "";
		if ( $scope.login === $scope.password ) {
			$location.path( "/home" );
		} else {
			$scope.message = "Authentication error";
		}		 
	}
	
}]);