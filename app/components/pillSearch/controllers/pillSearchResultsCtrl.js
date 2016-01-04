var app = angular.module('pillfinder');

app.controller('pillSearchResultsController', function ($stateParams, pillSearchService) {
	this.searchQuery = $stateParams.searchQuery;

	console.log(pillSearchService.data);
	this.data = pillSearchService.data;
});