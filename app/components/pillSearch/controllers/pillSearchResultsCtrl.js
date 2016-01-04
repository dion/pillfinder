var app = angular.module('pillfinder');

app.controller('pillSearchResultsController', function ($stateParams) {
	console.log("fijfaijsal");
	

	this.searchQuery = $stateParams.searchQuery;
});