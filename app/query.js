var db = require('./db');
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