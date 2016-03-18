var app = angular.module('rtfm');

app.service('threadService', function(EnvironmentService, $firebase, $rootScope){
var firebaseUrl = EnvironmentService.getEnv().firebase;
var user = $rootScope.username;

this.getThreads = function (){
	return $firebase(new Firebase(firebaseUrl + user + '/threads'));
};

this.getThread = function(threadId) {
	return $firebase(new Firebase(firebaseUrl + user +  '/threads/' + threadId));
}

this.getComments = function(threadId) {
	return $firebase(new Firebase(firebaseUrl + '/Comments/'));
}

})

 