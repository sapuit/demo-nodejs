function plus(detail) {
	console.log("1 + 1 =  ");
	detail(1 + 1);
}

function showResult(result) {
	console.log(result);
}

plus(showResult);