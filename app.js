
var express = require('express'),
	app = express(),
//	bodyParser = require('body-parser'),
	http = require('http');

/*app.use(bodyParser.urlencoded({
	extended: true
}));
*/

app.get('/', function (req, res) {
  res.send('');
});

app.get("/pills/:query", function (req, res) {
	var query = req.params.query,
	    body = '';

	res.header('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Origin', '*');

	http.get("http://www.healthline.com/v2/druginputautocomplete?query=" + query + "&for=pill", function (response) {
		console.log("Got response: " + res.statusCode);
		//response.resume();

		response.on("data", function(chunk) {
			console.log("BODY: " + chunk);
			body += chunk;	

			res.send(body);
		});

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

var server = app.listen(3000, function(err) {
	console.log("now running on port 3000");
});