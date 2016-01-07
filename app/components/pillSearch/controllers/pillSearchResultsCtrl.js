var app = angular.module('pillfinder');

app.controller('pillSearchResultsController', function ($stateParams, pillSearchService) {
	var self = this;
	this.data = pillSearchService.data;
	this.currentPageNumber = 2;
	this.busy = false;

	this.addMoreItems = function () {
		if (this.busy) {
			return;
		}

		this.busy = true;
		pillSearchService.fetchPillResults($stateParams.searchQuery, this.currentPageNumber++)
		.then(function (json) {
			if (json.data.meta.numResults > 0) {
				angular.forEach(json.data.data, function (value, key) {
					self.data.push(value);	
				});
				self.busy = false;
			}
		});
	};
});