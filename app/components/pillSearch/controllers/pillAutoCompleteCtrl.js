var app = angular.module('pillfinder');

app.controller('pillAutoCompleteCtrl', function ($http) {
	var self = this;

	this.selected = undefined;
	
	$http.get('/components/pillSearch/mocks/druginputautocomplete.json').
	success(function (json) {
		self.drugs = json.Drugs;
	});
});