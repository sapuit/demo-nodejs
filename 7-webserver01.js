var http = require("http");
var fs   = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

console.log("Starting");
var server = http.createServer(function(request, response) {
	console.log("Received request : " + request.url);
	fs.readFile("./public" + request.url, function(error, data) {
		if (error) {
			response.writeHead(404, {
				"Content-Type": "text/plain"
			});
			response.end("Sorry the page was not found.");
		} else {
			response.writeHead(200, {
				"Content-Type": "text/html"
			});
			response.end(data);
		}

	});
});

//	listening in host and in port 
server.listen(port, host, function() {
	console.log("listening " + host + ":" + port);
});

//	the callback listener will be called 
//  each time the file config.json is accessed.
fs.watchFile("config.json", function() {
	config   = JSON.parse(fs.readFileSync("config.json"))
	var host = config.host;
	var port = config.port;
	server.close();
	server.listen(port, host, function() {
		console.log("listening " + host + ":" + port);
	});
});