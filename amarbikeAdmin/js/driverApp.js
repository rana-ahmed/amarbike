(function() {
	'use strict';

	var amarBikeApp = angular.module('amarBike', ['ngRoute']);

	// configure our routes
	amarBikeApp.config(function($routeProvider) {
		$routeProvider

			.when('/home', {
				templateUrl : '/home.html',
				controller  : 'HomeController'
			})

			.when('/adddriver', {
				templateUrl : '/add-driver.html',
				controller  : 'AddDriverController'
			})

			.when('/addbike', {
				templateUrl : '/add-bike.html',
				controller  : 'AddBikeController'
			})

			.when('/addphone', {
				templateUrl : '/add-phone.html',
				controller  : 'AddPhoneController'
			})

			.when('/update-driver/:driverId', {
				templateUrl : '/update-driver.html',
				controller  : 'UpdateDriverController'
			})

			.when('/tables', {
				templateUrl : '/tables.html',
				controller  : 'DriverListController'
			})

			.when('/bike-table', {
				templateUrl : '/bike-table.html',
				controller  : 'BikeListController'
			})

			.when('/tables/:driverId', {
		        templateUrl: '/driver-detail.html',
		        controller: 'DriverDetailController'
		    })

		    .when('/bike-table/:bikeId', {
		        templateUrl: '/bike-detail.html',
		        controller: 'BikeDetailController'
		    })

		    .when('/update-bike/:bikeId', {
				templateUrl : '/update-bike.html',
				controller  : 'UpdateBikeController'
			})

			.otherwise({redirectTo:"/home"});
	});



	amarBikeApp.controller('HomeController', function($scope) {
		$scope.message = 'Look! I am an about page.';
		console.log("DashBoard");
	});

	
}());
	