var promise = require('bluebird');
var readFileAsync = promise.promisify(require('fs').readFile);

promise.resolve()
	.then(function() {
		return [readFileAsync("fileA.json"),
			readFileAsync("fileB.json")
		];
	})
	.spread(function(file1text, file2text) { //Nếu cả 2 tác vụ đọc đều thành công thì so sánh

		if (file1text === file2text) {
			console.log("files are equal");
		} else {
			console.log("files are not equal");
		}
	})
	.catch(function(err) { //Xử lý lỗi
		console.log(err.message);

	});