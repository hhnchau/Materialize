var express = require('express');
var router = express.Router();

var helper = require('../helper');
var query = require('../query');

const passPort = require('passport');
const localStategy = require('passport-local').Strategy;
const session = require('express-session');

router.use(session({
    secret: 'kingpes',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 //1month
    },
    resave: true,
    key: 'user',
    saveUninitialized: true
}));
router.use(passPort.initialize());
router.use(passPort.session());


/*
* LOGIN
*/
router.get('/login.html', (req, res) => {
    res.render('site/login/login');
});

router.post('/login.html',
    passPort.authenticate('local', { failureRedirect: '/login.html', successRedirect: '/' }));


/*
* PROFILE
*/
router.get('/site/profile.html', isLogin, (req, res) => {
    res.render('site/profile/profile', { user: req.user });
});

/*
* LOGOUT
*/
router.get('/logout.html', isLogin, function (req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/login.html');
});

/*
* REGISTER
*/
router.get('/logout.html', isLogin, function (req, res) {
    res.render('site/register/register');
});

/*
* FORGET
*/
router.get('/forget.html', isLogin, function (req, res) {
    res.render('site/forget/forget');
});

/*
* INDEX
*/
router.get('/', (req, res) => {
    res.render('site/home/index', { user: req.user });
});

/*
* DETAIL
*/
router.get('/site/detail/sn:id.html', (req, res) => {
    var productId = req.params.id;
    productId = productId.substring(1, productId.length);
    query.findProduct(productId, function (ProductForm) {
        res.render('site/detail/detail', { user: req.user, product: ProductForm });
    });
});

/*
* CART
*/
router.get('/site/cart.html', (req, res) => {    
    res.render('site/cart/cart', { user: req.user });
});

/*
* BLOG
*/
router.get('/site/blog.html', (req, res) => {
    res.render('site/blog/blog', { user: req.user });
});

/*
* EVENT
*/
router.get('/site/event.html', (req, res) => {
    res.render('site/event/event', { user: req.user });
});

/*
* CONTACT
*/
router.get('/site/contact.html', (req, res) => {
    res.render('site/contact/contact', { user: req.user });
});

/*
* AUTH
*/
passPort.use(new localStategy(
    (username, password, cb) => {
        helper.findUser(username, password, function (user) {
            if (user) {
                //Successfull
                return cb(null, user); // Call back user for serializeUser
            } else {
                //Fail
                return cb(null, false);
            }
        });
    }
));

passPort.serializeUser((user, cb) => {
    cb(null, user.userId); //Store id user for deserializeUser
});

passPort.deserializeUser((id, cb) => {
    helper.findUserById(id, function (user) {
        if (user) {
            //Successfull
            return cb(null, user);
        } else {
            //Fail
            return cb(null, false);
        }
    });
});

function isLogin(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login.html');
    }
}

module.exports = router;