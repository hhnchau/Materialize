var http = require("http");


http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type":"text/plan"});
  response.end("KhoaPham.<u>vn</u>");

}).listen(8888);
