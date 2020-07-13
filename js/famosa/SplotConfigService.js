// Splot Config Service
// Provides access to SPLOT configuration 
angular.module("famosa")
	.factory("splotConfigService",[
		function() {
	
	return {
		
		// Attributes
		// ==========
		
		serverUrl: "https://app-famosa-dev-001.azurewebsites.net"
		
	}		
		
}]);