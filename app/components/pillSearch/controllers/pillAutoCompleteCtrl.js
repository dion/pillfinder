var app = angular.module('pillfinder');

app.controller('pillAutoCompleteCtrl', function ($http) {
	var self = this;

	this.selected = undefined;

	this.getLocation = function (val) {
		return $http.jsonp('http://www.healthline.com/v2/druginputautocomplete', {
			params: {
				for: 'pills',
				query: val,
				callback: 'JSON_CALLBACK'
			}
		})
		.then(function(response){
      		return response.data.Drugs;
	    });
	};
});