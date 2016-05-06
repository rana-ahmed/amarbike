(function() {
	'use strict';

	var amarBikeApp = angular.module('amarBike');

	function DriverListController ($scope, $http, apiUrl) {
		var refresh = function() {
		  $http.get(apiUrl.driver_list).success(function(response){
		    	console.log('response');
		    	$scope.driverList = response;
		    	$scope.driver = '';
		   });

	    $http.get(apiUrl.driver_list).success(function(response) {
	        $scope.bikeLists = response;
	    });
	};

		refresh();


		$scope.removeDriver = function(id) {
	    	$http.delete(apiUrl.driver_list + id).success(function(response) {
	    		refresh();
	    	});
	    };

	    $scope.editDriver = function(id) {
	    	window.location = "/#update-driver/"+id;
	    }; 

	    $scope.showDriver = function(id) {
	    	window.location = "/#tables/"+id;
	    }; 

	    $scope.addDriver = function() {
	    	window.location = "/#adddriver";
	    };


      //var bikeList = document.getElementById("bikeList");
      //var awesompleteList = new Awesomplete(bikeList);
      //awesompleteList.list =  $scope.bikeLists;

     $scope.assignBike = function(){

        var bike_for_driver  = {
            "bike_id" : $scope.addBike.bike_id
        }

        console.log(bike_for_driver);

        $http.post(apiUrl.bike_assign + $scope.addBike.driver_id, bike_for_driver)
             .success(function(data) {
               $('#myModal').modal('hide');
             });
      }

	    
	}

	amarBikeApp.controller('DriverListController', DriverListController);
	
}());