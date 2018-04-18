var express = require('express');
var app = express();
var file = require('./file');
var settings = require('./settings');
var query = require('./query');
var querystring = require('querystring');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function () {
  console.log("Connect successfull!");
});

app.set("view engine", "ejs");
app.set("views", "../views/html");

/*
* API
*/

app.get(settings.findApiSettings, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {
    //Secret Ok
    query.findApiSettings(function (ApiSetingsForm) {
      res.json(ApiSetingsForm);
      res.end();
    });
  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})


app.get(settings.findAllProduct, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var offset = req.query.offset;
    var limit = req.query.limit;

    query.findAllProduct(offset, limit, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.get(settings.findProduct, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var productSn = req.query.productSn;

    query.findProduct(productSn, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.createNewOrders, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;
  
    query.createNewOrders(params, function (ResultForm) {
      res.json(ResultForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})


/*
* WEB
*/
app.get("/index", function (req, res) {
  res.render("index", {host: settings.url});
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/admin-dashboard", function (req, res) {
  res.render("admin-dashboard");
});

app.get("/new-product", function (req, res) {
  res.render("new-product");
});

app.get("/update-product", function (req, res) {
  res.render("update-product");
});

app.get("/promotion", function (req, res) {
  res.render("promotion");
});

app.get("/revenue", function (req, res) {
  res.render("revenue");
});

app.get("/statistic", function (req, res) {
  res.render("statistic");
});

app.get('/getResource:id', function (req, res) {
  file.sendResource(req, res);
});

app.get('/getImage:id', function (req, res) {
  file.sendImage(req, res);
});

var person = {
  ho: "Chau",
  ten: "Huynh",
  tuoi: "18",
  diachi: "hcm",
  add: "TP"
}

app.get("/demoGet", function (req, res) {
  var head = req.headers['secret'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var ho = req.query.ho;
  console.log(ho);

  var ten = req.query.ten;
  console.log(ten);

  res.json(person);

  res.end();
});

app.post("/demoPost", function (req, res) {
  var head = req.headers['auth'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var model = req.body;
  var ho = req.body.ho;
  var ten = req.body.ten;

  console.log(model);
  console.log(ho);
  console.log(ten);

  res.json(person);

  res.end();
});

app.put("/demoPut", function (req, res) {
  var head = req.headers['auth'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var model = req.body;
  var ho = req.body.ho;
  var ten = req.body.ten;

  console.log(model);
  console.log(ho);
  console.log(ten);

  res.json(person);

  res.end();
});

app.delete("/demoDelete", function (req, res) {
  var head = req.headers['secret'];
  var head1 = req.headers['secret1'];
  var head2 = req.headers['secret2'];
  var head3 = req.method;
  console.log(head);
  console.log(head1);
  console.log(head2);
  console.log(head3);

  console.log(req.url);

  var ho = req.query.ho;
  console.log(ho);

  var ten = req.query.ten;
  console.log(ten);

  res.json(person);

  res.end();
});