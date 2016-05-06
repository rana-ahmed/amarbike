(function() {
    'use strict';

    var amarBikeApp = angular.module('amarBike');

    amarBikeApp.controller('AddPhoneController', ['$scope', '$http', 'apiUrl', function($scope, $http, apiUrl) {

        $scope.savePhone = function() {

            var onResponse = function(response) {
                console.log(response.status);
                $scope.phone.model = "";
                swal("Registration Done Successfully");
            };

            var onError = function(error, status) {
                console.log("Error Occurred");
                console.log(status);
            };

            if ($scope.addPhoneForm.$invalid) {
                swal("Please put all information properly")
            };
            if ($scope.addPhoneForm.$valid) {
                    $http.post(apiUrl.add_phone, $scope.phone)
                         .then(onResponse, onError);

            };
        };

    }]);


}());