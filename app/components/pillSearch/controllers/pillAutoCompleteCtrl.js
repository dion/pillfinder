var app = angular.module('pillfinder');

app.controller('pillAutoCompleteCtrl', function ($http) {
	this.selected = undefined;
	this.lookup = function () {
		console.log(pillsearch);
	};
	this.drugs = [
		{
			"imuid": 9940521,
			"Term": "Lipitor"
		}, {
			"imuid": 9938084,
			"Term": "Lipofen"
		}, {
			"imuid": 9946666,
			"Term": "Lipram"
		}, {
			"imuid": 9946666,
			"Term": "Lipram-CR"
		}, {
			"imuid": 9946666,
			"Term": "Lipram-PN"
		}, {
			"imuid": 9946666,
			"Term": "Lipram-UL"
		}
	];
	/*$http({
		method: 'JSONP',
		url: 'http://www.healthline.com/v2/druginputautocomplete',
		params: {
			query: 'lev',
			for: 'pill'
		}
	}).
	success(function (status) {
		console.log(status);
	}).
	error(function (status) {
		console.log(status);
	});*/
});