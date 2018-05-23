var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
  //200:ok
  res.writeHead(200, {"Content-Type":"text/html"});
  //Cach 1
  // var data = fs.readFileSync(__dirname+"/index.html", "utf-8");
  // data = data.replace("{NAME}", "KHOA PHAM");
  // res.end(data);

//Cach 2
  fs.createReadStream(__dirname+ "/index.html").pipe(res);
}).listen(7777);
