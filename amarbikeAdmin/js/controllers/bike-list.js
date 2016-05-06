(function() {
	'use strict';

	var amarBikeApp = angular.module('amarBike');

	function BikeListController ($scope, $http, apiUrl) {
		var refresh = function() {
		  $http.get(apiUrl.bike_list).success(function(response){
		    	console.log('response');
		    	$scope.bikeList = response;
		   });
		};

		refresh();


		$scope.removeBike = function(id) {
	    	$http.delete(apiUrl.bike_list + id).success(function(response) {
	    		refresh();
	    	});
	    };

	    $scope.editBike = function(id) {
	    	window.location = "/#update-bike/"+id;
	    }; 

	    $scope.showBike = function(id) {
	    	window.location = "/#bike-table/"+id;
	    }; 

	    $scope.addBike = function() {
	    	window.location = "/#addbike";
	    };
	    
	}

	amarBikeApp.controller('BikeListController', BikeListController);
	
}());