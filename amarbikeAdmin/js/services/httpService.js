(function() {
	'use strict'; 

    var amarBikeApp = angular.module('amarBike');

	var httpService = function($http) {

    	var uploadFileToUrl = function(driverInfo, uploadUrl) {
            var fd = new FormData();
            for(var key in driverInfo){
                 fd.append(key, driverInfo[key]);
                 console.log(key);
                 console.log(driverInfo[key]);
            }
            return $http.post(uploadUrl, fd, {
                    transformRequest: angular.indentity,
                    headers: { 
                        'Content-Type': undefined
                    }
            })
                .success(function(response) {
                    return response;
                })
                .error(function(error, status) {
                    console.log(status);
                });
        };

    	var updateData = function(file, driverInfo, uploadUrl) {
            var fd = new FormData();
            fd.append('file', file);
            var info = {
                'driverInfo': driverInfo,
                'file': file
            }
            console.log(info);
            return $http.put(uploadUrl, info, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                })
                .success(function(response) {
                    return response;
                })
                .error(function(error, status) {
                    console.log(status);
                });
        };

        

    	return{
            
    		uploadFileToUrl : uploadFileToUrl,
    		updateData : updateData
    	}

    };

    amarBikeApp.factory('httpService', httpService);
	
}());     