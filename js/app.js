var app = angular.module('rtfm', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'js/login/login.html',
		controller: 'loginController'
	})
	.when('/threads', {
		templateUrl: 'js/threads/threads.html',
		controller: 'threadsCtrl',
		resolve: {
			threadsRef: function(threadService) {
				return threadService.getThreads();
			}
		}
	})
	.when('/feedback', {
		templateUrl: 'js/feedback/feedback.html',
		controller: 'threadCtrl',
		resolve: {
			threadRef: function(threadService, $route) {
				return threadService.getThread($route.current.params.threadId);
			},
			commentsRef: function(threadService, $route) {
				return threadService.getComments($route.current.params.threadId)
			}
		}
	})
	.otherwise({
		redirectTo: '/threads'
	});
})

app.run(function($rootScope, $location, EnvironmentService){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if(!EnvironmentService.isLoggedin()) {
			$location.path('/login');
		} else {
			$rootScope.username = EnvironmentService.getUsername();
		}
	})
})

 