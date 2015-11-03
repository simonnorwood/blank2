angular.module('starter.controllers', [])

// regions controller for testing
.controller('regionCTRL', function($scope){
	console.log("regions");
})

// api call to offices.json 
.controller('APICtrl', function($scope, $http) {
	var url = "";
	if (ionic.Platform.isAndroid()){
		url = "/android_asset/www"
	}
	// search function starts here
	$scope.query = {}
	$scope.queryBy = '$'
	// search function ends here
 $http.get('js/offices.json').then(function(resp) {
    console.log('Success', resp);
    $scope.offices = resp.data.office;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
})