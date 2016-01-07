var app = angular.module('pillfinder');

app.controller('pillSearchResultsController', function (pillSearchService) {
	this.data = pillSearchService.data;
});