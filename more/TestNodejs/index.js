var express = require('express')
var app = express()
app.listen(3000)

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var urlensodedParser = bodyParser.urlencoded({extended:false})

//create route
app.post('/dangky', urlensodedParser, finction(req, res){
  if (req.body) return res.sendStatus(400)

  //let = hang so
  //let ten = req.body.username
  var ten = req.body.username
  res.send('Welcom: ' + ten)
})

var arrTen = Array()
app.post('/them', urlensodedParser, function(req, res)){
    var ten = req.body.n
    arrTen.push(ten)
    console.console.log(arrTen);
    return res.json(arrTen) //tra ve json
    //res.send(ten)   //tra ve html
    //post phai return
})

app.get('/getdanhsach', function(req, res){
  return res.json(arrTen)
})

  var n = 1 //bien toan cuc se chay xuyen suot, restart khi khoi dong server
  //create route
  app.get)('/cong', function(req, res){
    n = n + 1
    res.send(""+n)
  })
