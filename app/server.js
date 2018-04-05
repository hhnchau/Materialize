var express = require('express');
var app = express();
app.listen(3000, function(){
  console.log("Connect successfull!");
});

app.set("view engine", "ejs");
app.set("views", "../views");

app.get("/index", function(req, res){
  res.render("html/index");
});