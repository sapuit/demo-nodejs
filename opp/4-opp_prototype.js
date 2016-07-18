function Monhoc(ten,sochi) {
	this.Ten = ten;
	this.Sochi = sochi;
}

Monhoc.prototype.mota = function() {
	console.log("Mon hoc : " + this.Ten + "\n" +
		"So tin chi : " + this.Sochi);
};

var thongtin = new Monhoc("Nodejs", 4);
thongtin.mota();