var app = angular.module('pillfinder');

app.controller('pillSearchResultsHeaderController', function ($stateParams, pillSearchService) {
	this.searchQuery = $stateParams.searchQuery;

	this.searchQueryCount = pillSearchService.pillResultsCount;
});