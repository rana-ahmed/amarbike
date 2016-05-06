(function() {
    'use strict';

    var amarBikeApp = angular.module('amarBike');

    amarBikeApp.controller('AddBikeController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl) {

        $scope.saveBike = function() {

            var onResponse = function(response) {
                console.log(response.status);
                $scope.bike.model = "";
                swal("Bike Added Successfully");
            };

            var onError = function(error, status) {
                console.log("Error Occurred");
                console.log(status);
            };

            if ($scope.addBikeForm.$invalid) {
                swal("Please put all information properly")
            };
            if ($scope.addBikeForm.$valid) {
                    $http.post(apiUrl.add_bike, $scope.bike)
                         .then(onResponse, onError);

            };
        };

         $scope.addBike = function() {
            window.location = "/#addBike()";
        };

    }]);


}());