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
    //SELECT p.productName, r.buy FROM product AS p JOIN price AS r ON p.productId = r.productId LIMIT 0, 25

    // var sql = "SELECT p.productName, pri.sell, img.*, yt.*";
    //     sql += " FROM product AS p";
    //     sql += " LEFT JOIN price AS pri ON p.productId = pri.priceId";
    //     sql += " LEFT JOIN image AS img ON p.productId = img.imageId";
    //     sql += " LEFT JOIN youtube AS yt ON p.productId = yt.ytId";

    // var sql = "SELECT p.productId, p.productName, pri.sell, img.image1, count(*) as totalLike, count(*) as totalRate, count(*) as totalComment";
    //     sql += " FROM product AS p";
    //     sql += " LEFT JOIN price AS pri ON p.productId = pri.priceId";
    //     sql += " LEFT JOIN image AS img ON p.productId = img.imageId";
    //     sql += " LEFT JOIN likes AS lik ON p.productId = lik.likesId";// GROUP BY lik.likesId";
    //     sql += " LEFT JOIN rate AS rat ON p.productId = rat.rateId";// GROUP BY rat.rateId";
    //     sql += " LEFT JOIN comment AS com ON p.productId = com.commentId GROUP BY lik.likesId, rat.rateId, com.commentId";

    var b = "hoa";

    // var sql = "SELECT p.productId, p.productName";
    //     sql += " FROM product AS p";
    //     sql += " LEFT JOIN category AS cate ON p.productId = cate.categoryId";
    //     sql += " WHERE cate.categoryName LIKE '%"+b+"%'";


    var sql = "SELECT p.productId, p.productName";
    sql += " FROM product AS p";
    sql += " LEFT JOIN category AS cate ON p.productId = cate.categoryId";
    sql += " WHERE p.productName LIKE '%" + b + "%'";







    //Get USER LIKES
    //var sql = "SELECT u.nickname, u.phone";
    //   sql += " FROM user AS u";
    //    sql += " LEFT JOIN likes AS lik ON lik.userId = u.userId WHERE lik.likesId = '7'"; //likesId = productId


    //sql += " WHERE product.productId = price.productId AND price.productId = media.productId AND media.productId = raiting.productId";
    //var sql = "SELECT product.* FROM product LIMIT " + offset + ", " + limit;
    string.sqlFindAllProduct(function (stringQuery) {
      sql = stringQuery;
      db.execute(sql, function (data, err) {
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
    var sql = "SELECT product.* FROM product WHERE productSn = '" + productSn + "'";
    db.execute(sql, function (data, err) {
      if (err) {
        log.error("findProduct", err);
      } else {
        models.ProductForm(data[0]);
        log.write("findProduct", JSON.stringify(models.data));
        callback(models.data);
      }
    });
  } catch (ex) {
    log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
  }
}

exports.createNewOrders = function (params, callback) {
  try {
    console.log(params);
    var sql = "SELECT product.* FROM product WHERE productSn = '" + 'productSn' + "'";
    db.execute(sql, function (data, err) {
      if (err) {
        log.error("createNewOrders", err);
      } else {

        var result = {
          status: 1,
          desc: "Huynh"
        }

        models.ResultForm(result);
        log.write("createNewOrders", JSON.stringify(models.data));
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