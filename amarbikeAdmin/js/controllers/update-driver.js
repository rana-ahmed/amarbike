(function() {
    'use strict';

    var amarBikeApp = angular.module('amarBike');

    amarBikeApp.directive('fileModel', ['$parse', function($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function() {
                    scope.$apply(function() {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);

    amarBikeApp.controller('UpdateDriverController', ['$scope', '$http', 'httpService', '$routeParams', 'apiUrl', function($scope, $http, httpService, $routeParams, apiUrl) {

        var init = function() {
             $http.get(apiUrl.driver_detail + $routeParams.driverId).success(function(data) {
                $scope.driver = data;
             });
        }
        init();

        $scope.updateInfo = function() {

            var onResponse = function(response) {
                console.log(response.status);
                $scope.driver.name = "";
                swal("Information Updated");
            };

            var onError = function(error, status) {
                console.log("Error Occurred");
                console.log(status);
            };



            var driverInfo = {
                'id' : $scope.driver.id,
                'name': $scope.driver.name,
                'number': $scope.driver.contact_number,
                'address': $scope.driver.address,
                'nid': $scope.driver.national_id,
                'license_number': $scope.driver.license_number

            };

            var file = [];
            file.push($scope.driver.myFile1);
            file.push($scope.driver.myFile2);
            file.push($scope.driver.myFile3);


            var uploadUrl = "http://www.example.com/images";

            if ($scope.addDriverForm.$invalid) {
                swal("Please put all information properly");
            };
            if ($scope.addDriverForm.$valid) {
                    httpService.updateData(file, driverInfo, uploadUrl)
                    .then(onResponse, onError);

            };
        };

    }]);


}());