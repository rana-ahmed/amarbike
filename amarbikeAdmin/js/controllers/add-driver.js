(function() {
    'use strict';

    var amarBikeApp = angular.module('amarBike');

   

    amarBikeApp.controller('AddDriverController', ['$scope', '$http', 'httpService', 'apiUrl', function($scope, httpService, apiUrl) {

        $scope.driver = {};
        $scope.uploadFile = function() {

            var onResponse = function(response) {
                console.log(response.status);
                $scope.driver.name = "";
                swal("Driver Added Successfully");
            };

            var onError = function(error, status) {
                console.log("Error Occurred");
                console.log(status);
            };


            if ($scope.addDriverForm.$invalid) {
                swal("Please put all information properly")
            };
            if ($scope.addDriverForm.$valid) {
                httpService.uploadFileToUrl($scope.driver, apiUrl.add_driver)
                    .then(onResponse, onError);

            };
        };

    }]);


}());