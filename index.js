var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var html = fs.readFileSync('index.html');
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(html);
});

app.get ('/a', function(request, response) {
	var stringa = request.query.weight+" bytes";
	response.json ({size: stringa});
	});
	
app.post('/', function(request, response) {
	console.log(request.body);
	var target = '/a?weight='+request.body.weight;
	response.send({redirect: target});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});