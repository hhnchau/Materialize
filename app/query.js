var db = require('./db');
var string = require('./string');
var log = require('./log');
Models = require('./models');
var models = new Models({});


exports.findApiSettings = function (callback) {
  try {
    var sql = "SELECT * FROM settings";
    db.execute(sql, function (data, err) {
      if (err) {
        log.error("findApiSettings", err);
      } else {
        models.ApiSettingsForm(data[0]);
        log.write("findApiSettings", JSON.stringify(models.data));
        callback(models.data);
      }
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.findAllProduct = function (offset, limit, callback) {
  try {
    string.sqlFindAllProduct(null, offset, limit, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("findAllProduct", err);
        } else {
          models.ProductForm(data);
          log.write("findAllProduct", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.findProduct = function (productSn, callback) {
  try {
    string.sqlFindProduct(productId, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("findProduct", err);
        } else {
          models.ProductForm(data[0]);
          log.write("findProduct", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.createNewOrders = function (params, callback) {
  try {
    string.sqlCreateNewTransactions(params, function (stringQuery) {
      db.execute(sql, function (data, err) {
        if (err) {
          log.error("CreateNewTransactions", err);
        } else {
          var transactionId = data[0].insertId;
          string.sqlCreateNewDelivery(transactionId, params.receiverName, params.receiverAddress, params.receiverPhone, function (stringQuery) {
            db.execute(sql, function (data, err) {
              if (err) {
                log.error("CreateNewDelivery", err);
              } else {
                models.ProductForm(data);
                log.write("CreateNewDelivery", JSON.stringify(models.data));
                callback(models.data);
              }
            });
          });
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}


exports.insert = function () {
  try {
    //var sql = "SELECT product.*, category.* FROM product JOIN category WHERE product.productId = 1";
    var sql = "DELETE FROM product WHERE productId = 1";
    db.execute(sql, function (data, err) {
      console.log(data);
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  };
}