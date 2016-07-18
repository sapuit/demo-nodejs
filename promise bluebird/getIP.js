var promise = require('bluebird'),
	needle = require('needle'),
	getAsync = promise.promisify(needle.get);

console.time('taskA');
getAsync('http://ip.jsontest.com/')
	.then(function(response) {
		console.log(response.body.ip);
		return response.body.ip; //	res ip addr
	})
	.then(function(ip) {
		console.log(ip);
		return getAsync('http://www.geoplugin.net/json.gp?ip=' + ip);
	})
	.then(function(response) {
		console.log(response.body); //In kết quả
		console.timeEnd('taskA'); //In tổng thời gian chạy 2 lệnh
	})
	.catch(function(e) { //Bắt lỗi nếu có
		console.error('Error:' + e);
	});