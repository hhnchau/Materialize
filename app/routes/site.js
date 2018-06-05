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
    res.render('site/login/login-layout');
});

router.post('/login.html',
    passPort.authenticate('local', { failureRedirect: '/login.html', successRedirect: '/' }));

/*
* LOGIN
*/
router.get('/', isLogin, (req, res) => {
    res.render('site/home/home-layout');
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