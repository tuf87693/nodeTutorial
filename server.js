var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.send('hello world');
});

app.get('/funtime',function(req, res)
{
	res.send("<p> "Hey" + req.query.name + "happy to meet you !" </p>");
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
