var express = require('express'),
	app = express(),
	http = require('http');

app.get("/pills/:query", function (req, res) {
	var query = req.params.query;

	http.get("http://www.healthline.com/v2/druginputautocomplete?query=" + query + "&for=pill", function (response) {
		res.header('Content-Type', 'application/json');
		res.header('Access-Control-Allow-Origin', '*');
		var body = '';

		response.on("data", function(chunk) {
			body += chunk;
		});

		response.on("end", function() {
			res.end(body);
		});

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

var server = app.listen(3000, function(res, err) {
	console.log("now running on port 3000");
});