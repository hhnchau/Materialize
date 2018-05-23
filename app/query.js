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

exports.findAllProduct = function (filter, offset, limit, callback) {
  try {
    string.sqlFindAllProduct(filter, offset, limit, function (stringQuery) {
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

exports.findProduct = function (productId, callback) {
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

exports.findComment = function(productId, offset, limit, callback){
  try {
    string.sqlFindComment(productId, offset, limit, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("findComment", err);
        } else {
          models.ProductForm(data);
          log.write("findComment", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.insertComment = function(params, callback){
  try {
    string.sqlInsertComment(params.commentId, params.userId, params.question, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("insertComment", err);
          models.ProductForm({insert: 0});
          callback(models.data);
        } else {
          models.ProductForm({insert: 1});
          log.write("insertComment", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.updateComment = function(params, callback){
  try {
    string.sqlUpdateComment(params.id, params.answer, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("updateComment", err);
          models.ProductForm({update: 0});
          callback(models.data);
        } else {
          models.ProductForm({update: 1});
          log.write("updateComment", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.findRaiting = function(productId, offset, limit, callback){
  try {
    string.sqlFindRaiting(productId, offset, limit, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("findRaiting", err);
        } else {
          models.ProductForm(data);
          log.write("findRaiting", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.insertRaiting = function(params, callback){
  try {
    string.sqlInsertRaiting(params.rateId, params.userId, params.question, params.rate, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("insertRaiting", err);
          models.ProductForm({insert: 0});
          callback(models.data);
        } else {
          models.ProductForm({insert: 1});
          log.write("insertRaiting", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.updateRaiting = function(params, callback){
  try {
    string.sqlUpdateRaiting(params.id, params.answer, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("updateRaiting", err);
          models.ProductForm({update: 0});
          callback(models.data);
        } else {
          models.ProductForm({update: 1});
          log.write("updateRaiting", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.findLikes = function(productId, offset, limit, callback){
  try {
    string.sqlFindLikes(productId, offset, limit, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("findLikes", err);
        } else {
          models.ProductForm(data);
          log.write("findLikes", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.insertLikes = function(params, callback){
  try {
    string.sqlInsertLikes(params.likesId, params.userId, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("insertLikes", err);
          models.ProductForm({insert: 0});
          callback(models.data);
        } else {
          models.ProductForm({insert: 1});
          log.write("insertLikes", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.deleteLikes = function(params, callback){
  try {
    string.sqlDeleteLikes(params.id, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("deleteLikes", err);
          models.ProductForm({delete: 0});
          callback(models.data);
        } else {
          models.ProductForm({delete: 1});
          log.write("deleteLikes", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.insertOrders = function (params, callback) {
  try {
    string.sqlInsertTransactions(params, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("insertOrders", err);
          models.ProductForm({insert: 0});
          callback(models.data);
        } else {
          var transactionId = data.insertId;
          string.sqlInsertDelivery(transactionId, params.receiverName, params.receiverAddress, params.receiverPhone, function (stringQuery) {
            db.execute(stringQuery, function (data, err) {
              if (err) {
                log.error("insertOrders", err);
                models.ProductForm({insert: 0});
                callback(models.data);
              } else {
                models.ProductForm({insert: 1});
                log.write("insertOrders", JSON.stringify(models.data));
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

exports.insertUser = function (params, callback) {
  try {
    string.sqlInsertUser(params, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("insertUser", err);
          models.ProductForm({insert: 0});
          callback(models.data);
        } else {
          models.ProductForm({insert: 1});
          log.write("insertUser", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.updateUser = function (params, callback) {
  try {
    string.sqlUpdateUser(params, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("updatetUser", err);
          models.ProductForm({update: 0});
          callback(models.data);
        } else {
          models.ProductForm({update: 1});
          log.write("updatetUser", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.findVoucher = function(code, callback){
  try {
    string.sqlFindVoucher(code, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("findVoucher", err);
        } else {
          if(data.length > 0){
            models.ProductForm(data[0]);
          }else{
            models.ProductForm({value: 0});
          }
          log.write("findVoucher", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.insertVoucher = function (params, callback) {
  try {
    string.sqlInsertVoucher(params, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("insertVoucher", err);
          models.ProductForm({insert: 0});
          callback(models.data);
        } else {
          models.ProductForm({insert: 1});
          log.write("insertVoucher", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.updateVoucher = function (params, callback) {
  try {
    string.sqlUpdateVoucher(params, function (stringQuery) {
      db.execute(stringQuery, function (data, err) {
        if (err) {
          log.error("updateVoucher", err);
          models.ProductForm({update: 0});
          callback(models.data);
        } else {
          models.ProductForm({update: 1});
          log.write("updateVoucher", JSON.stringify(models.data));
          callback(models.data);
        }
      });
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}