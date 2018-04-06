var express = require('express');
var app = express();
var file = require('./file');

app.listen(3000, function () {
  console.log("Connect successfull!");
});

app.set("view engine", "ejs");
app.set("views", "../views/html");

app.get("/index", function (req, res) {
  res.render("index", { url: "http://localhost:3000/" });
});


// app.get('/image', function (req, res) {
//   res.sendFile(path.resolve("../views/images/hotel/aloc.jpg"));
// });


// app.get('/css', function (req, res) {
//   res.sendFile(path.resolve("../views/css/materialize.css"));
// });

app.get('/getResource:id', function(req , res){
  file.sendResource(req, res);
});

app.get('/getImage:id', function(req , res){
  file.sendImage(req, res);
});