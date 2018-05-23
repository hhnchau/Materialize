var express = require('express');
var app = express();
app.listen(3000, function(){
  console.log("Connect successfull!");
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/index", function(req, res){
  res.render("index");
});



/*
* UPLOAD
*/
app.get("/upload", function(req, res){
  res.render("upload");
});
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './upload');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
});
var upload = multer({storage:storage});
//Search upload multi file
app.post('/upload', upload.single("file"), function(req, res){
  console.log(req.file);
  res.send("Thanh Cong");
})
