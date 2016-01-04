var app = angular.module('pillfinder');

app.factory('pillSearchService', function ($stateParams, $http) {
	//this.searchQuery = $stateParams.searchQuery;
	var utilities = {
		getPillResults: getPillResults,
		getPillResultsCount: getPillResultsCount,
		data: []
	};

	function getPillResults () {
		$http.get('/components/pillSearch/mocks/pill-results.json').
		then(function (json) {
			utilities.data = json.data.data;
		});
	}

	function getPillResultsCount () {
		return utilities.data.length

	}

	return utilities;
});