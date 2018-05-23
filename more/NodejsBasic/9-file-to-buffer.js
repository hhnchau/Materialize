//Module co sang cua node. Giup cho viec doc file va upload file
var fs = require("fs");
var nodung = fs.readFileSync(__dirname + "/danhsach.txt");
console.log(nodung);
console.log(nodung.toString());
