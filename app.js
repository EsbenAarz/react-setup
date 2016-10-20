var http = require('http');
var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var ruter = require('./mockdata/ruter.json');
var request = require('request');

var pg = require('pg');

console.log(process.env.DATABASE_URL);

app.use(bodyParser.json());
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

var databaseResponseHandler = function(err, result) {
  done();
  if (err) { console.error(err); response.send("Error " + err); }
  else {
      var json = JSON.stringify(result.rows);
      response.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
      response.end(json);
  }
};

app.get('/poops', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM poop', function(err, result) {
      done();
      if (err) { console.error(err); response.send("Error " + err); }
      else {
          var json = JSON.stringify(result.rows);
          response.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
          response.end(json);
      }
    });
  });
});

app.post('/poops', function (request, response) {
    console.log('POST Received to poops: ' + request.body._date);
    var startTime = request.body._date;
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('INSERT INTO poop ("start_time") VALUES (\'' + startTime + '\')', function(err, result){
            if (err) {
                console.log(err);
            }
            done();
            response.writeHead(204);
            response.end();
        });
    });
})

app.get('/eat', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM eat', function(err, result) {
      done();
      if (err) { console.error(err); response.send("Error " + err); }
      else {
          var json = JSON.stringify(result.rows);
          response.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
          response.end(json);
      }
    });
  });
});

app.get('/sleep', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM sleep', function(err, result) {
      done();
      if (err) { console.error(err); response.send("Error " + err); }
      else {
          var json = JSON.stringify(result.rows);
          response.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
          response.end(json);
      }
    });
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
