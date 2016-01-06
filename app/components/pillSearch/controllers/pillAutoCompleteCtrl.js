var app = angular.module('pillfinder');

app.controller('pillAutoCompleteCtrl', function ($http) {
	var self = this;

	this.selected = undefined;

	this.getLocation = function (val) {
		return $http.get('//dion-dev.healthline.com:3000/pills/' + val)
		.then(function(response){
			console.log(response);
      		return response.data.Drugs;
	    });
	};
});