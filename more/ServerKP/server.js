var express = require('express');
var app = express();
var path = require('path');

app.listen(3000, function () {
  console.log("Connect successfull!");
});


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get("/", function (req, res) {
  res.render("index");
});


// Routes
var upload = require('./routes/upload');
app.use('/chau', upload);




// New
var bodyParser = require("body-parser");
var multer = require('multer');
app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './upload');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var upload = multer({ storage: storage }).any();

app.get('/upload-image', function (req, res) {
  res.render("upload-image");
});
app.post('/api/photo', function (req, res) {
  upload(req, res, function (err) {
    var secret = req.headers['secret'];
    console.log(secret);
    console.log(req.files);
    console.log(req.body.mot);
    console.log(req.body.hai);
    console.log(req.body.ba);
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});
