var express = require('express');
var router = express.Router();
var settings = require('../settings');
var query = require('../query');
var helper = require('../helper');

const passPort = require('passport');
const localStategy = require('passport-local').Strategy;
const session = require('express-session');

router.use(session({
    secret: 'kingpes',
    resave: true,
    key: 'user',
    saveUninitialized: true
}));
router.use(passPort.initialize());
router.use(passPort.session());

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '../public/upload');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
var upload = multer({ storage: storage }).any();

/*
* LOGIN
*/
router.get('/login.html', (req, res) => {
    res.render('admin/login/login-layout');
});

router.post('/login.html', (req, res) => {
    var secret = req.headers[settings.secret_key];
    if (secret === settings.secret_encrypt) {

        helper.findUser(req.body, function (exist) {
            if (exist == 1) {
                //Successfull
                console.log('OK');

            } else {
                //Fail
                console.log('fail');

            }
        });

    } else {
        //Response 404
        res.write(settings.secret_fail);
        res.end();
    }

});

/*
* PRODUCT
*/
router.get('/product/list-product.html', (req, res) => {

    var offset = 0;//req.query.offset;
    var limit = 10;//req.query.limit;
    var filter = req.query.filter;

    console.log("TEST");


    query.findAllProduct(filter, offset, limit, function (ProductForm) {
        res.render('admin/product/list-product', { product: ProductForm });
    });

});

router.post('/product/check-product', (req, res) => {
    var secret = req.headers[settings.secret_key];
    if (secret === settings.secret_encrypt) {

        var productSn = req.body.productSn;

        query.checkProductSn(productSn, function (ProductForm) {
            res.json(ProductForm);
            res.end();
        });

    } else {
        //Response 404
        res.write(settings.secret_fail);
        res.end();
    }

});

router.get('/product/add-product.html', (req, res) => {
    res.render('admin/product/add-product');
});

router.post('/product/add-product.html', (req, res) => {
    console.log(req.body.productVideo);
    console.log(req.body.productEditor);
    upload(req, res, function (err) {
        var secret = req.headers['secret'];
        console.log(secret);
        console.log(req.files);
        console.log(req.body.productCode);
        console.log(req.body.productName);
        console.log(req.body.productCategory);
        console.log(req.body.productAmount);
        console.log(req.body.productBuy);
        console.log(req.body.productSell);
        console.log(req.body.productPromotion);
        console.log(req.body.productVideo);
        console.log(req.body.productEditor);
        if (err) {
            return res.end("Thêm sản phẩm thất bại");
        }
        res.end("Thêm sản phẩm thành công");
    });
});

router.put('/admin/product/update-product.html', (req, res) => {
    render('admin/product/update-product');
});

router.delete('/admin/product/delete-product.html', (req, res) => {
    render('admin/product/delete-product');
});

/*
* VOUCHER
*/


/*
* PROMOTION
*/


/*
* EVENT
*/

/*
* BLOG
*/


/*
* AUTH
*/
passPort.use(new localStategy(
    (username, password, cb) => {
        fs.readFile('./userDB.json', (err, data) => {
            const db = JSON.parse(data);
            console.log('localStategy');

            console.log(db);
            const userRecord = db.find(user => user.usr === username)
            if (userRecord && userRecord.pwd === password) {
                return cb(null, userRecord)
            } else {
                return cb(null, false)
            }
        })
    }
));

passPort.serializeUser((user, cb) => {
    cb(null, user.usr)
});

passPort.deserializeUser((name, cb) => {
    fs.readFile('./userDB.json', (err, data) => {
        const db = JSON.parse(data);
        console.log('deserialize');
        console.log(db);
        const userRecord = db.find(user => user.usr == name)
        if (userRecord) {
            return cb(null, userRecord)
        } else {
            return cb(null, false)
        }
    })
});

module.exports = router;