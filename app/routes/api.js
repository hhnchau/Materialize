var express = require('express');
var settings = require('../settings');
var query = require('../query');
var router = express.Router();

router.get("/findAllProduct", function (req, res) {
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
});

router.get("/findRating", function (req, res) {
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
});

router.post("/insertRating", function (req, res) {
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
});

router.get("/findComment", function (req, res) {
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
});

router.post("/insertComment", function (req, res) {
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
});

router.post("/insertOrders", function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var json = req.body.order;
    var  params= JSON.parse(json);
    
    query.insertOrders(params, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
});

router.get("/findReceiver", function (req, res) {
  var secret = req.headers[settings.secret_key];
  if (secret === settings.secret_encrypt) {

    var userId = req.query.userId;

    query.findReceiver(userId, function (ProductForm) {
      res.json(ProductForm);
      res.end();
    });

  } else {
    //Response 404
    res.write(settings.secret_fail);
    res.end();
  }
});

module.exports = router;