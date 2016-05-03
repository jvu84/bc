var express = require('express');
var cluster = require('cluster');
var fs = require('fs');
var accounts = require('./controllers/accounts');
var messages = require('./controllers/messages');

var port = 7000;

var app = express();

app.all('*', function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	next();
});



app.get('/', function (req, res) { res.send('BetterCompany Backend!'); });

app.get('/account', accounts.getAccount );
app.get('/user/:id', accounts.getUser );

app.get('/user/:id/messages', messages.getMessages );
app.post('/user/:id/messages', messages.createMessages );


//


//if( false ) {	//run in single thread mode
if( cluster.isMaster ) {	//run in mult-thread mode
	
	console.log("Running");
	
	// Fork workers.
  var numCPUs = require('os').cpus().length;
  console.log("Starting");
	
	for (var i = 0; i < numCPUs; i++) {
    //console.log("Forking CPU: " + i);
		cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });
}
else {
	
	var server = app.listen(port, function (err) {
		if(err) console.log(err);
		
	  var host = server.address().address;
	  console.log('Worker: ' + cluster.worker.process.pid + ' listening at http://%s:%s', host, port);
	});
}


