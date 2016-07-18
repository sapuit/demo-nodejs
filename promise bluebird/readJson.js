var fs = require('fs');
var promise = require('bluebird');

console.time('xx');
//	cover fs.readFile method
var readFileAsync = promise.promisify(fs.readFile);
console.timeEnd('xx');

readFileAsync("sap.json")
	.then(JSON.parse)
	.then(function(json) {
		console.log(json);
	})
	.catch(SyntaxError, function(e) { //Bắt lỗi parse JSON trước
		console.error("invalid json in file", e.message);
	})
	.catch(function(e) { //Bắt lỗi đọc file
		console.error("unable to read file", e.message);
	});