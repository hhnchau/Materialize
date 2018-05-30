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
        maxAge: 1000*60*3
    },
    resave: true,
    key: 'user',
    saveUninitialized: true
  
  }));
app.use(passPort.initialize());
app.use(passPort.session);

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

app.route('/login')
    .get((req, res) => res.render('login'))
    .post(passPort.authenticate('local',{failureRedirect: '/login', suscessRedirect: '/loginok'}))


passPort.use(new localStategy(
    (username, password, done) => {
        fs.readFile('./userDB.json', (err, data) => {
            const db = JSON.parse(data);
            const userRecord = db.find(user =>user.usr === username)
            if(userRecord && userRecord.pwd === password){
                return done(null, userRecord)
            }else{
                return done(null, false)
            }
        })
    }
));

passPort.serializeUser((user, done) => {
    done(null, user.usr)
});

passPort.deserializeUser((name, done) => {
    fs.readFile('./userDB.json', (err, data) =>{
        const db = JSON.parse(data)
        const userRecord = db.find(user => user.usr == name)
        if(userRecord){
            return done(null, userRecord)
        }else{
            return done(null, false)
        }
    })
});

const port = 3000;
app.listen(port, () => console.log('Listing port ${port}'));