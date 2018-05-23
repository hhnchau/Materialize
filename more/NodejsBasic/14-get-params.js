var express = require("express");
var app = express();

var server = require("http").createServer(app);
server.listen(3000);

app.get("/tinhtong/:so1/:so2", function(req, res){
  var a = req.params.so1
  a = parseInt(a);
  var b = req.params.so2
  b = parseInt(b);
  res.send("KetQua: "+ a + b);
  res.sendFile(__diename + "/index.html");
})
