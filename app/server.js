var express = require('express');
var path = require('path');
var file = require('./file');
var settings = require('./settings');
var query = require('./query');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "../views");
app.use(express.static(path.join(__dirname, '../public')));

app.listen(settings.listenPort, function () {
  console.log("Connect successfull!");
});

var url = "abcdefgh";
var encoded = new Buffer(url).toString('base64');
var decoded = new Buffer(encoded, 'base64').toString('ascii')

console.log(encoded);
console.log(decoded);

var admin = require('./routes/admin');
app.use('/admin', admin);

var site = require('./routes/site');
app.use('/', site);

var api = require('./routes/api');
app.use('/api', api);


//Voucher
app.get('/admin/find-all-voucher.html', (req, res) =>{
  console.log('okkkk');  
});

app.post('/admin/add-voucher.html', (req, res) =>{
  console.log('okkkk');  
});

app.put('/admin/update-voucher.html', (req, res) =>{
  console.log('okkkk');  
});

app.delete('/admin/delete-voucher.html', (req, res) =>{
  console.log('okkkk');  
});

//Promotion
app.get('/admin/find-all-promotion.html', (req, res) =>{
  console.log('okkkk');  
});

app.post('/admin/add-promotion.html', (req, res) =>{
  console.log('okkkk');  
});

app.put('/admin/update-promotion.html', (req, res) =>{
  console.log('okkkk');  
});

app.delete('/admin/delete-promotion.html', (req, res) =>{
  console.log('okkkk');  
});

//Event
app.get('/admin/find-all-event.html', (req, res) =>{
  console.log('okkkk');  
});

app.post('/admin/add-event.html', (req, res) =>{
  console.log('okkkk');  
});

app.put('/admin/update-event.html', (req, res) =>{
  console.log('okkkk');  
});

app.delete('/admin/delete-event.html', (req, res) =>{
  console.log('okkkk');  
});

//Blog
app.get('/admin/find-all-blog.html', (req, res) =>{
  console.log('okkkk');  
});

app.post('/admin/add-blog.html', (req, res) =>{
  console.log('okkkk');  
});

app.put('/admin/update-blog.html', (req, res) =>{
  console.log('okkkk');  
});

app.delete('/admin/delete-blog.html', (req, res) =>{
  console.log('okkkk');  
});


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
    var filter = req.query.filter;

    query.findAllProduct(filter, offset, limit, function (ProductForm) {
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

    var productId = req.query.productId;

    query.findProduct(productId, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.get(settings.findComment, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var offset = req.query.offset;
    var limit = req.query.limit;
    var productId = req.query.productId;

    query.findComment(productId, offset, limit, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.insertComment, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.insertComment(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.put(settings.updateComment, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.updateComment(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.get(settings.findRaiting, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var offset = req.query.offset;
    var limit = req.query.limit;
    var productId = req.query.productId;

    query.findRaiting(productId, offset, limit, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.insertRaiting, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.insertRaiting(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.put(settings.updateRaiting, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.updateRaiting(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.get(settings.findLikes, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var offset = req.query.offset;
    var limit = req.query.limit;
    var productId = req.query.productId;

    query.findLikes(productId, offset, limit, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.insertLikes, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.insertLikes(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.delete(settings.deleteLikes, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.deleteLikes(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.insertOrders, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.insertOrders(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.insertUser, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.insertUser(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.put(settings.updateUser, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.updateUser(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.get(settings.findVoucher, function(req, res){
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var code = req.query.code;

    query.findVoucher(code, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.post(settings.insertVoucher, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.insertVoucher(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
})

app.put(settings.updateVoucher, function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var params = req.body;

    query.updateVoucher(params, function (ProductForm) {
      res.json(ProductForm);
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
  res.render("index", { host: settings.url });
});

app.get("/details/sn:id", function (req, res) {
  res.render("details", { host: settings.url, id: req.params.id });
});

app.get("/cart", function (req, res) {
  res.render("html/cart", {host: settings.url });
});

app.get("/search/keyword:key", function (req, res) {
  res.render("details", { host: settings.url, keyword: req.params.key });
});

app.get("/admin-login", function (req, res) {
  console.log("BACK");
  res.render("admin/admin-login");
});

app.post("/admin-login", function (req, res) {
  var secret = req.headers[settings.secret_key];
  console.log(secret);
  
  if (secret === settings.secret_encrypt) {

    var username = req.body.username;
    var password = req.body.password;

    console.log(username + password);
    
    res.json({status:'Dang Nhap Thanh Cong'});
    res.end();

  }else{
    res.json({status:'Dang Nhap That Bai'});
    res.end();
  }
});

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '../public/upload');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var upload = multer({ storage: storage }).any();

app.post('/admin-add', function (req, res) {
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

app.get("/admin-home", function (req, res) {
  res.render("admin/admin-home", { host: settings.url });
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




/*
* WEB
*/
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