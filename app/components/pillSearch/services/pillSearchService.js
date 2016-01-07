var app = angular.module('pillfinder');

app.factory('pillSearchService', function ($http, $q) {
	var utilities = {
		getPillResults: getPillResults,
		setPillResults: setPillResults,
		fetchPillResults: fetchPillResults,
		pillResultsCount: 0,
		data: []
	};

	function getPillResults () {
	
	}

	function setPillResults (data) {
		if (data) {
			utilities.data = data;
		}
	}

	function fetchPillResults (query, page) {
		var deferred = $q.defer(),
		    page = page ? page : 1;

		$http.jsonp('http://api2.healthline.com/api/service/2.0/pill/images', {
			params: {
				partnerId: '31a86f67-b1b6-4fd7-8b98-8caeee8d3078',
				name: query,
				page: page,
				callback: 'JSON_CALLBACK'
			}
		}).
		success(function (json) {
			utilities.setPillResults(json.data);
			utilities.pillResultsCount = json.meta.numResults;
            deferred.resolve({
            	data:json
            });
		}).
		error(function (msg, code) {
			return deferred.reject();
		});

        return deferred.promise;
	}

	return utilities;
});