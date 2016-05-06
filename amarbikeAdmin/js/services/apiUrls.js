(function() {
	'use strict'; 

    var amarBikeApp = angular.module('amarBike');

	var apiUrl = function() {
        var image_root = "http://localhost:8000/upload/"
        var add_driver = "http://localhost:8000/api/v1/driver/";
        var add_bike = "http://localhost:8000/api/v1/bike/";
        var add_phone = "http://localhost:8000/api/v1/phone/"
        var driver_detail = "http://localhost:8000/api/v1/driver/";
        var bike_detail = "http://localhost:8000/api/v1/bike/";
        var driver_list = "http://localhost:8000/api/v1/driver/";
        var bike_list = "http://localhost:8000/api/v1/bike/";
        var update_bike = "http://localhost:8000/api/v1/bike/";
        var bike_assign = "http://localhost:8000/api/v1/driver/setbike/";
        var bike_remove = "http://localhost:8000/api/v1/driver/removebike/";

    	return{
            add_driver : add_driver,
            add_bike : add_bike,
            add_phone : add_phone,
            driver_detail : driver_detail,
            driver_list : driver_list,
            bike_list : bike_list,
            update_bike : update_bike,
            bike_detail : bike_detail,
            bike_assign : bike_assign,
            bike_remove : bike_remove
    	};

    };

    amarBikeApp.factory('apiUrl', apiUrl);
	
}());     