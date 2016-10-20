var http = require('http');
var _ = require('lodash');
var express = require('express');

var app = express();
var ruter = require('./mockdata/ruter.json');
var request = require('request');

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/hello', function(req, res) {
    return res.send('world');
});

app.get('/weather', function(req, res) {
	req.
		pipe(request('http://api.openweathermap.org/data/2.5/weather?q=Oslo,no&units=metric&appid=4566b83e4327f7e3feb2c22bb8faf53a')).
		pipe(res);
});

app.get(
	'http://reisapi.ruter.no/StopVisit/GetDepartures/3010312',
	function(req, res) {
		return res.jsonp(ruter);
});

app.get('/stats', function(req, res) {
    return res.sendFile('statistics.html', {
        root: __dirname + '/public'
    });
});

app.use(function(err, req, res, next) {
    require('util').inspect(err);
    res.status(500).send({ error: err.message });
});

http.createServer(app)
    .listen((process.env.PORT || 9999), function() {
        console.log('Running on port 9999');
    });
