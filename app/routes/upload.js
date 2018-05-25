var express  = require('express');
var router = express.Router();
var multer = require('multer');


router.get('/upload', function(req, res){
    res.render("admin/admin-home");
});

var storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null, '../public/upload/');
    },
    filename: function(req, file, cb){
        cb(null, file.filename + '_' + Date.now() + '.jpg');
    } 
});

var upload = multer({storage:storage});
//Search upload multi file
router.post('/upload', upload.single("file"), function(req, res){
  console.log(req.file);
  res.send("Thanh Cong");
})

module.exports = router;