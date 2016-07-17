var express = require('express');
var fs      = require('fs');
var app     = express();

var config  = JSON.parse(fs.readFileSync("config.json"));
var host    = config.host;
var port    = config.port;
var server  = app.listen(port, host, function() {
	console.log("listening " + host + ":" + port);
});

// this response with "Hello word" on the homepage
app.get('/', function (req, res) {
	console.log("Got a GET request for the homepage");
	res.send('Hello GET');
})

// this response a Post request from homepage
app.post('/', function (req, res) {
	console.log("Got a post request for the homepage");
	res.send('Hello POST');
})

//	this response a Get request for the /list_user page
app.get('/list_user', function (req, res) {
	console.log("Got a GET request the /list_user page");
	res.send('Hello list_user');
})

//	this response a Get request for the /list_user page
app.delete('/del_user', function (req, res) {
	console.log("Got a GET request the /list_user page");
	res.send('Hello list_user');
})

//	this response a Grt request for send file
app.get('/sendfile', function (req, res) {
	console.log("Got a GET request the /sendfile page");
	res.sendFile(__dirname + "/public/index.html");
})