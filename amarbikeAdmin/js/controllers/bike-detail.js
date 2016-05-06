(function() {
	'use strict';

	var amarBikeApp = angular.module('amarBike');

	function BikeDetailController ($scope, $http, $routeParams, apiUrl) {
		 $http.get(apiUrl.bike_detail + $routeParams.bikeId ).success(function(data) {
	    	 $scope.bikeData = data;
		 });
	}

	amarBikeApp.controller("BikeDetailController", ['$scope', '$http', '$routeParams', 'apiUrl',  BikeDetailController]);

}());