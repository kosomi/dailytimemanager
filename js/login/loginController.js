var app = angular.module('rtfm');

app.controller('loginController', function($window, $scope, $location, EnvironmentService){

$scope.logMeIn = function(username){
	// alert(username);
	EnvironmentService.saveUsername(username);
	$location.path('/threads')
}

$scope.check = function(){
	if(EnvironmentService.getUsername() == undefined){
			return true;
		} else {
			return false;
		}
}

});