const express = require('express');
const bodyParser = require('body-parser');
const passPort = require('passport');
const localStategy = require('passport-local').Strategy;
const session = require('express-session');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'kingpes',
    cookie:{
        maxAge: 1000*60*3 //3phut
    },
    resave: true,
    key: 'user',
    saveUninitialized: true
  }));
app.use(passPort.initialize());
app.use(passPort.session());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/private', (req, res) =>{
    if (req.isAuthenticated()){
        res.send('Welcom to private page');
    }else{
        res.send('Ban chua login');
    }
})

app.get('/', (req, res) => res.render('index'));

app.get('/loginok', (req, res) => res.send("Login Thanh Cong"));


    app.get('/login',(req, res) => res.render('login'));
    app.post('/login',passPort.authenticate('local',{failureRedirect: '/login', successRedirect: '/loginok'}));


passPort.use(new localStategy(
    (username, password, cb) => {
        fs.readFile('./userDB.json', (err, data) => {
            const db = JSON.parse(data);
            console.log('localStategy');
            
            console.log(db);
            const userRecord = db.find(user =>user.usr === username)
            if(userRecord && userRecord.pwd === password){
                return cb(null, userRecord)
            }else{
                return cb(null, false)
            }
        })
    }
));

//Login thanh cong, luu vao session
passPort.serializeUser((user, cb) => {
    cb(null, user.usr)
});

//Kiem tra chung thuc, name = session(user.usr) da luu
passPort.deserializeUser((name, cb) => {
    fs.readFile('./userDB.json', (err, data) =>{
        const db = JSON.parse(data);
        console.log('deserialize');
        console.log(db);
        const userRecord = db.find(user => user.usr == name)
        if(userRecord){
            return cb(null, userRecord)
        }else{
            return cb(null, false)
        }
    })
});

const port = 3000;
app.listen(port, () => console.log('Listing port ${port}'));