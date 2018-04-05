var http = require('http');
//
// var app = http.createServer(function(req,res){
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({ a: 1 }));
// });
// app.listen(8080);


var o = {} // empty Object
var key = 'Orientation Sensor';
o[key] = []; // empty Array, which you can push() values into


var data = {
    sampleTime: '1450632410296',
    data: '76.36731:3.4651554:0.5665419'
};
var data2 = {
    sampleTime: '1450632410296',
    data: '78.15431:0.5247617:-0.20050584'
};
o[key].push(data);
o[key].push(data2);




var express = require("express");
var app = express();
app.listen(8080);

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended:false})


var person = {
  ho : "Chau",
  ten : "Huynh"
}

app.get("/demoGet", function(req, res){
var head = req.headers['auth'];
var head1 = req.headers['auth1'];
var head2 = req.headers['auth2'];
var head3 = req.method;
console.log(head);
console.log(head1);
console.log(head3);

console.log(req.url);

var names = req.params.name;
console.log(names);

  res.json(person);

       res.end();
})

app.put("/demoPut", function(req, res){
  res.json(person);
});

app.post("/demoPost",urlParser, function(req, res){
var head4 = req.headers['auth'];
var head5 = req.headers['auth5'];
  console.log(head4);
  console.log(head5);
  console.log(req.url);


res.set('OK', "person");
// 
// res.setHeader("Content-Type", "application/json");
  var txt = req.body.ten;
  console.log(txt);
  res.json(person);

})
