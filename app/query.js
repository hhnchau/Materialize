var db = require('./db');

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