var app = angular.module('rtfm');

app.service('EnvironmentService', function($window) {

	this.getEnv = function() {
		return $window.env;
	};

	this.saveUsername = function(username){
		$window.localStorage.setItem('username', username);
	};

	this.getUsername = function(){
		return $window.localStorage.getItem('username');
	};

	this.isLoggedin = function(){
		if($window.localStorage.getItem('username') !== undefined){
			return true;
		} else {
			return false;
		}
	};

});