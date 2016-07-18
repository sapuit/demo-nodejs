// 	khởi tạo promise 
//	resolve : sử lý sự kiện thành công
//	reject 	: sủ lý thất bại
// var promise = new Promise(function(resolve, reject) {
// 	resolve('Success');
// 	// OR
// 	// reject('Error');
// });

// // 	thenable : ghi nhận kết quả trạng thái
// promise.then(
// 	function(success) {
// 		console.log(success);
// 	},
// 	function(error) {
// 		console.log(error);
// 	});

// //   Promise chaining : gọi then liên tiếp

// //	Kết quả : resolve : 1 2 3, reject: error
// promise
// 	.then(function() {
// 		console.log(1);
// 	})
// 	.then(function() {
// 		console.log(2);
// 	})
// 	.then(function() {
// 		console.log(3);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});

// //	Kết quả : resolve : 1 2 3, reject: error 3
// promise
// 	.then(function() {
// 		console.log(1);
// 	})
// 	.then(function() {
// 		console.log(2);
// 	}, function(error) {
// 		console.log(error);
// 	})
// 	.then(function() {
// 		console.log(3);
// 	});

// //	Kết quả : error
// promise
// 	.then(function() {
// 		return new Promise(function(resolve, reject) {
// 			reject();
// 		});
// 	})
// 	.then(function() {
// 		console.log('Success!');
// 	})
// 	.catch(function() {
// 		console.log('Error!');
// 	});

// 	Promise.all  gộp nhiều promise lại với nhau
var promise1 = new Promise(function(resolve, reject) {
	resolve('Success p1');
	// OR
	// reject('Error');
});

var promise2 = new Promise(function(resolve, reject) {
	// resolve('Success p2');
	// OR
	reject('Error p2');
});

var promise3 = new Promise(function(resolve, reject) {
	// resolve('Success p3');
	// OR
	reject('Error p3');
});

// result : [ 'Success p1', 'Success p2', 'Success p3' ]
Promise.all([promise1, promise2, promise3])
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
		console.log(error);
	});