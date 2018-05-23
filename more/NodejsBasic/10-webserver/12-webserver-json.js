var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
  //200:ok
  res.writeHead(200, {"Content-Type":"application/json"});
  var obj = {
    ho : "Pham",
    ten :"Khoa",
    namsinh: 1987
  }
  res.end(JSON.stringify(obj));
}).listen(7777);
