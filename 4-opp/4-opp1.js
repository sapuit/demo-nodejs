var student = {
	id 		: "12520321",
	name 	: "Phuoc Nguyen",
	welcome : function () {
		console.log(this.name + ",welcome to UIT.");
	}
}

student.welcome();

console.log("Your id : " + student["id"]);