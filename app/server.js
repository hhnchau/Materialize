var express = require('express');
var app = express();
var file = require('./file');
var query = require('./query');
var querystring = require('querystring');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function () {
  console.log("Connect successfull!");
});

app.set("view engine", "ejs");
app.set("views", "../views/html");

app.get("/index", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/admin-dashboard", function (req, res) {
  res.render("admin-dashboard");
});

app.get("/new-product", function (req, res) {
  res.render("new-product");
});

app.get("/update-product", function (req, res) {
  res.render("update-product");
});

app.get("/promotion", function (req, res) {
  res.render("promotion");
});

app.get("/revenue", function (req, res) {
  res.render("revenue");
});

app.get("/statistic", function (req, res) {
  res.render("statistic");
});

app.get('/getResource:id', function (req, res) {
  file.sendResource(req, res);
});

app.get('/getImage:id', function (req, res) {
  file.sendImage(req, res);
});

var person = {
  ho: "Chau",
  ten: "Huynh",
  tuoi: "18",
  diachi: "hcm",
  add: "TP"
}

app.get("/demoGet", function (req, res) {
  var head = req.headers['secret'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var ho = req.query.ho;
  console.log(ho);

  var ten = req.query.ten;
  console.log(ten);

  res.json(person);

  res.end();
});

app.post("/demoPost", function (req, res) {
  var head = req.headers['auth'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var model = req.body;
  var ho = req.body.ho;
  var ten = req.body.ten;

  console.log(model);
  console.log(ho);
  console.log(ten);

  res.json(person);

  res.end();
});

app.put("/demoPut", function (req, res) {
  var head = req.headers['auth'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var model = req.body;
  var ho = req.body.ho;
  var ten = req.body.ten;

  console.log(model);
  console.log(ho);
  console.log(ten);

  res.json(person);

  res.end();
});

app.delete("/demoDelete", function (req, res) {
  var head = req.headers['secret'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var ho = req.query.ho;
  console.log(ho);

  var ten = req.query.ten;
  console.log(ten);

  res.json(person);

  res.end();
});