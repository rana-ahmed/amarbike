(function() {
	'use strict';

	var amarBikeApp = angular.module('amarBike');

	function DriverDetailController ($scope, $http, $routeParams, apiUrl) {
		 $http.get(apiUrl.driver_detail + $routeParams.driverId ).success(function(data) {
	    	 $scope.driverData = data;
		 });
	}

	amarBikeApp.controller("DriverDetailController", ['$scope', '$http', '$routeParams', 'apiUrl',  DriverDetailController]);

}());