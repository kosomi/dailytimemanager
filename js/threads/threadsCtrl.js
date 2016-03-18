var app = angular.module('rtfm');

app.controller('threadsCtrl', function($scope, Firebase, $filter, $window, threadsRef, $location, EnvironmentService, $window, $scope, $location, EnvironmentService){

$scope.check = function(){
	if(EnvironmentService.getUsername() == undefined){
			return $location.path('/login');
		} else {
			return false;
		}
}

$scope.threads = threadsRef.$asArray();



$scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');

$scope.todaydate = $filter("date")(Date.now(), 'yyyy-MM-dd');
 
$scope.totalCups = 0;  
$scope.morningHour = 0;
$scope.noonHour = 0;
$scope.nightHour = 0;
$scope.morningMin = 0;
$scope.noonMin = 0;
$scope.nightMin = 0;
$scope.comment = "";

// $scope.threads.$loaded().then(function(threads) {
// 	console.log(threads);
// }); 

$scope.delete = function(thread){
	if(confirm('Do you want to delete it?')){
			$scope.threads.$remove(thread);
		} else {
			
		}
}

$scope.recordCups = function(morningHour, noonHour, nightHour, morningMin, noonMin, nightMin, comment){

	$scope.totalCups = $scope.morningHour*60 + $scope.noonHour*60 + $scope.nightHour*60 + 
					   $scope.morningMin*1 + $scope.noonMin*1 +$scope.nightMin*1  ;

	if($scope.totalCups < 1){
		return false;
	}

 	function findTotal(){
 		return parseInt($scope.totalCups/60)
 	};
	
	$scope.totalHour = findTotal();

	$scope.totalMin = $scope.totalCups%60 ;	   
 
	$scope.threads.$add({
		morningHour: morningHour,
		noonHour: noonHour,
		nightHour: nightHour,
		morningMin: morningMin,
		noonMin: noonMin,
		nightMin: nightMin,
		totalHour: $scope.totalHour, 
		totalMin: $scope.totalMin, 
		date : $scope.date,
		comment: $scope.comment
	})

		$scope.totalCups = 0;  
		$scope.morningHour = 0;
		$scope.noonHour = 0;
		$scope.nightHour = 0;
		$scope.morningMin = 0;
		$scope.noonMin = 0;
		$scope.nightMin = 0;
		$scope.comment = "";
}
 
	$scope.heroImage = {
        'background-image': 'url(http://static3.businessinsider.com/image/54412639eab8ea5d519bd154-1200-924/6-335.jpg)'
    };


 

});