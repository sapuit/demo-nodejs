var http = require("http");

http.createServer(function(req,res) {

	res = writeHead(200, {"Content-Type" : "text/plain" });	
	res.end("sap.io");
}).listen(6969);