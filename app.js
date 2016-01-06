var express = require('express'),
	app = express(),
//	bodyParser = require('body-parser'),
	http = require('http');

/*app.use(bodyParser.urlencoded({
	extended: true
}));*/
app.get("/pills/:query", function (req, res) {
	var query = req.params.query;
	    body = '';

	http.get("http://www.healthline.com/v2/druginputautocomplete?query=" + query + "&for=pill", function (response) {
		res.header('Content-Type', 'application/json');
		res.header('Access-Control-Allow-Origin', '*');
		firstRun = false;

		response.on("data", function(chunk) {
//			console.log("BODY: " + chunk);
			body += chunk;

			res.end(body);
		});

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

var server = app.listen(3000, function(res, err) {
	console.log("now running on port 3000");
});