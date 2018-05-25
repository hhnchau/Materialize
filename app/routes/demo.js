var express  = require('express');
var router = express.Router();
var multer = require('multer');

console.log("OKK");

var storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null, '/public/upload/');
    },
    filename: function(req, res, cb){
        cb(null, file.filename + '_' + Date.now() + '.jpg');
    } 
});

var upload = multer({
    storage: storage
}).single('file');

router.post('/', function(req,res){
    upload(req, res, function(err){
        if(err){

        }
        res.json({
            success: true,
            message: 'Upload successful'
        });
    });
});

module.exports = router;