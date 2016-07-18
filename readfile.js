// file -> buffer -> truyen
var hello = require("fs");

var noidung = hello.readFileSync( __dirname +"/hello.txt");
console.log(noidung);
console.log(noidung.toString());
