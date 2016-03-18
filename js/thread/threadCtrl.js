var app = angular.module('rtfm');

app.controller('threadCtrl', function($scope, $filter, threadRef, commentsRef, threadService){

var thread = threadService.getThreads().$asObject();

thread.$bindTo($scope, 'thread');

$scope.comments = commentsRef.$asArray();
$scope.date = $filter("date")(Date.now(), 'medium');

$scope.delete = function(comment){
	$scope.comments.$remove(comment);
}

$scope.createComment = function(username, comment) {
	
	$scope.comments.$add({
		username: username,
		text: comment,
		date: $scope.date
	})

	$scope.username = '';
	$scope.text = ''; 
}

})