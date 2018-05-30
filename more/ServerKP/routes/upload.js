var express = require('express');
var router = express.Router();

var multer = require('multer');

/*
* UPLOAD
*/
router.get("/upload", function(req, res){
  console.log("/upload");
  
    res.render("upload");
  });
  
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
  router.post('/upload', upload.single("sortpic"), function(req, res){
    console.log(req.file);
    res.send("Thanh Cong");
  })

  module.exports = router;