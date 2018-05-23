var express = require("express");
var app = express();
app.use(express.static("public"));
//use ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

//create round
app.get("/main", function(req, res){
  res.render("main");
});
