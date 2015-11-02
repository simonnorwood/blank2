angular.module('starter.controllers', [])

// regions controller for testing
.controller('regionCTRL', function($scope){
	console.log("regions");
})

// api call to offices.json
.controller('APICtrl', function($scope, $http) {
	$scope.query = {}
	$scope.queryBy = '$'
 $http.get('../offices.json').then(function(resp) {
    console.log('Success', resp);
    $scope.offices = resp.data.office;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
})
