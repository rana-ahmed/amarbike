(function() {
    'use strict';

    var amarBikeApp = angular.module('amarBike');

    amarBikeApp.controller('UpdateBikeController', ['$scope', '$http', '$routeParams', 'apiUrl', function($scope, $http, $routeParams, apiUrl) {

        var init = function() {
             $http.get(apiUrl.bike_list + $routeParams.bikeId).success(function(data) {
                $scope.bike = data;
             });
        }
        init();

        $scope.saveBike = function() {

            var onResponse = function(response) {
                console.log(response.status);
                $scope.bike.model = "";
                swal("Bike Information Updated Successfully");
            };

            var onError = function(error, status) {
                console.log("Error Occurred");
                console.log(status);
            };

            if ($scope.addBikeForm.$invalid) {
                swal("Please put all information properly")
            };
            if ($scope.addBikeForm.$valid) {
                    $http.post(apiUrl.update_bike+$routeParams.bikeId, $scope.bike)
                         .then(onResponse, onError);

            };
        };

    }]);


}());