var express = require('express');
var settings = require('../settings');
var router = express.Router();
var multer = require('multer');

var person = {
    ho: "Chau",
    ten: "Huynh",
    tuoi: "18",
    diachi: "hcm",
    add: "TP"
}


router.get('/upload', function (req, res) {
    res.render("admin/admin-home");
});

var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, '../public/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({ storage: storage });

router.post('/upload', upload.any(), function (req, res) {
    var secret = req.headers[settings.secret_key];
    console.log(secret);
    console.log(req.file);
    console.log(req.body)
    res.json(person);

    res.end();
})

module.exports = router;