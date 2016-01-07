var app = angular.module('pillfinder');

app.factory('pillSearchService', function ($stateParams, $http, $q) {
	//this.searchQuery = $stateParams.searchQuery;
	var utilities = {
		setPillResults: setPillResults,
		getPillResults: getPillResults,
		getPillResultsCount: getPillResultsCount,
		data: []
	};

	return utilities;

	function setPillResults (data) {
		console.log(data, arguments);
		if (data) {
			utilities.data = data;
		}
	}

	function getPillResults (query) {
		var deferred = $q.defer();

		$http.jsonp('http://api2.healthline.com/api/service/2.0/pill/images', {
			params: {
				partnerId: '31a86f67-b1b6-4fd7-8b98-8caeee8d3078',
				name: query,
				callback: 'JSON_CALLBACK'
			}
		}).
		success(function (json) {
			utilities.setPillResults(json.data);

            deferred.resolve({
            	data:json.data.data
            });
		}).
		error(function (msg, code) {
			return deferred.reject();
		});

        return deferred.promise;
	}

	function getPillResultsCount () {
		return utilities.data.length

	}

	return utilities;
});