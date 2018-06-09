
exports.sqlFindAllProduct = function (search, offset, limit, query) {
    var sql = "";
    sql += "SELECT allProduct.*, raiting.likeTotal, raiting.rateTotal, raiting.rateValue, raiting.commentTotal";
    sql += " FROM";
    sql += " (SELECT p.productId, p.productName, pri.sell, pro.discount, img.image1";
    sql += " FROM product AS p";
    sql += " LEFT JOIN price AS pri ON p.productId = pri.priceId";
    sql += " LEFT JOIN image AS img ON p.productId = img.imageId";

    if (search == null || search == "") {
        sql += " LEFT JOIN promotion AS pro ON p.promotionId = pro.promotionId) AS allProduct";
    } else {
        sql += " LEFT JOIN promotion AS pro ON p.promotionId = pro.promotionId";
        sql += " WHERE p.productName like '%" + search + "%') AS allProduct";
    }

    sql += " LEFT JOIN";
    sql += " (SELECT countLikes.productId, countLikes.likeTotal, countRate.rateValue, countRate.rateTotal, countComment.commentTotal";
    sql += " FROM";
    sql += " (SELECT p.productId, count(*) AS likeTotal";
    sql += " FROM product AS p, likes AS l";
    sql += " WHERE p.productId = l.likesId";
    sql += " GROUP BY p.productId) AS countLikes";
    sql += " LEFT JOIN";
    sql += " (SELECT p.productId, sum(r.rate) AS rateValue, count(*) AS rateTotal"
    sql += " FROM product AS p, rate AS r"
    sql += " WHERE p.productId = r.rateId";
    sql += " GROUP BY p.productId) AS countRate ON countLikes.productId = countRate.productId";
    sql += " LEFT JOIN";
    sql += " (SELECT p.productId, count(*) AS commentTotal";
    sql += " FROM product AS p, comment AS c";
    sql += " WHERE p.productId = c.commentId"
    sql += " GROUP BY p.productId) AS countComment ON countLikes.productId = countComment.productId) AS raiting";
    sql += " ON allProduct.productId = raiting.productId";
    sql += " LIMIT " + offset + ", " + limit;

    query(sql);
};

exports.sqlFindProduct = function (productId, query) {
    var sql = "";
    sql += "SELECT p.*, ca.*, img.*, yt.*";
    sql += " FROM product AS p";
    sql += " LEFT JOIN image as img ON p.productId = img.imageId";
    sql += " LEFT JOIN youtube as yt ON p.productId = yt.ytId";
    sql += " LEFT JOIN category as ca ON p.productId = ca.categoryId";
    sql += " WHERE p.productId = '" + productId + "'";

    query(sql);
};

exports.sqlFindLikes = function (productId, offset, limit, query) {
    var sql = "";
    sql += "SELECT u.nickname, l.*";
    sql += " FROM user AS u";
    sql += " LEFT JOIN likes AS l ON u.userId = l.userId";
    sql += " WHERE l.likesId = '" + productId + "'";
    sql += " LIMIT " + offset + ", " + limit;

    query(sql);
};

exports.sqlInsertLikes = function (likesId, userId, query) {
    //commentId = productId
    //userId = userId
    var sql = "";
    sql += "INSERT INTO likes";
    sql += " (likesId, userId)";
    sql += " VALUES";
    sql += " ('" + likesId + "', '" + userId + "')";

    query(sql);
}

exports.sqlDeleteLikes = function (id, query) {
    //id = primary Id Of Table
    var sql = "";
    sql += "DELETE FROM likes";
    sql += " WHERE";
    sql += " userId = '" + id + "'";

    query(sql);
}

exports.sqlFindRaiting = function (productId, offset, limit, query) {
    var sql = "";
    sql += "SELECT u.nickname, r.*";
    sql += " FROM user AS u";
    sql += " LEFT JOIN rate as r ON u.userId = r.userId";
    sql += " WHERE r.rateId = '" + productId + "'";
    sql += " LIMIT " + offset + ", " + limit;

    query(sql);
};

exports.sqlInsertRaiting = function (rateId, userId, question, rate, query) {
    //commentId = productId
    //userId = userId
    var sql = "";
    sql += "INSERT INTO rate";
    sql += " (rateId, userId, rateQuestion, rate)";
    sql += " VALUES";
    sql += " ('" + rateId + "', '" + userId + "', '" + question + "', '" + rate + "')";

    query(sql);
}

exports.sqlUpdateRaiting = function (id, answer, query) {
    //id = primary Id Of Table
    var sql = "";
    sql += "UPDATE rate";
    sql += " SET";
    sql += " rateAnswer = '" + answer + "'";
    sql += " WHERE";
    sql += " id = '" + id + "'";

    query(sql);
}

exports.sqlFindComment = function (productId, offset, limit, query) {
    var sql = "";
    sql += "SELECT u.nickname, c.*";
    sql += " FROM user AS u";
    sql += " LEFT JOIN comment as c ON u.userId = c.userId";
    sql += " WHERE c.commentId = '" + productId + "'";
    sql += " LIMIT " + offset + ", " + limit;

    query(sql);
};

exports.sqlInsertComment = function (commentId, userId, question, query) {
    //commentId = productId
    //userId = userId
    var sql = "";
    sql += "INSERT INTO comment";
    sql += " (commentId, userId, commentQuestion)";
    sql += " VALUES";
    sql += " ('" + commentId + "', '" + userId + "', '" + question + "')";

    query(sql);
}

exports.sqlUpdateComment = function (id, answer, query) {
    //id = primary Id Of Table
    var sql = "";
    sql += "UPDATE comment";
    sql += " SET";
    sql += " commentAnswer = '" + answer + "'";
    sql += " WHERE";
    sql += " id = '" + id + "'";

    query(sql);
}

exports.sqlInsertTransactions = function (params, query) {
    //status = 0 : new, 1: waiting for confirm, 2:
    //userId = 0: Guest mode, >0: Member mode
    var sql = "";
    sql += " INSERT INTO transactions";
    sql += " ("
    if (params.userId > 0)
        sql += "userId, ";
    if (params.productId > 0)
        sql += "productId, ";
    if (params.promotionId > 0)
        sql += "promotionId, ";
    if (params.voucherId > 0)
        sql += "voucherId, ";
    if (params.point > 0)
        sql += "point, ";
    sql += "totalFee, ";
    sql += "status ";
    sql += ")";

    sql += " VALUES (";
    if (params.userId > 0)
        sql += "'" + params.userId + "',";
    if (params.productId > 0)
        sql += "'" + params.productId + "',";
    if (params.promotionId > 0)
        sql += "'" + params.promotionId + "',";
    if (params.voucherId > 0)
        sql += "'" + params.voucherId + "',";
    if (params.point > 0)
        sql += "'" + params.point + "',";
    sql += " '" + params.totalFee + "',";
    sql += " '" + params.status + "'";
    sql += ");";

    query(sql);
}

exports.sqlInsertDelivery = function (transactionId, receiverName, receiverAddress, receiverPhone, query) {
    var sql = "";
    sql += "INSERT INTO delivery";
    sql += " (deliveryId, receiverName, receiverAddress, receiverPhone)";
    sql += " VALUES";
    sql += " ('" + transactionId + "', '" + receiverName + "', '" + receiverAddress + "', '" + receiverPhone + "')";

    query(sql);
}

exports.sqlInsertUser = function (params, query) {
    var sql = "";
    sql += " INSERT INTO user";
    sql += " (nickname, address, phone, password, sex, email)";
    sql += " VALUES";
    sql += " ('" + params.nickname + "', '" + params.address + "', '" + params.phone + "', '" + params.password + "', '" + params.sex + "', '" + params.email + "')";

    query(sql);
}

exports.sqlUpdateUser = function (params, query) {
    var sql = "";
    sql += "UPDATE user";
    sql += " SET";
    sql += " nickname = '" + params.nickname + "',";
    sql += " address = '" + params.address + "',";
    sql += " password = '" + params.password + "',";
    sql += " sex = '" + params.sex + "'";
    sql += " WHERE";
    sql += " userId = '" + params.userId + "'";

    query(sql);
}

exports.sqlFindVoucher = function (code, query) {
    var sql = "";
    sql += "SELECT value FROM voucher";
    sql += " WHERE";
    sql += " code = '" + code + "'";
    sql += " && now() > start";
    sql += " && now() < end";

    query(sql);
}

exports.sqlInsertVoucher = function (params, query) {
    var sql = "";
    sql += " INSERT INTO voucher";
    sql += " (voucherName, voucherDescription, code, value, start, end)";
    sql += " VALUES";
    sql += " ('" + params.voucherName + "', '" + params.voucherDescription + "', '" + params.code + "', '" + params.value + "', '" + params.start + "', '" + params.end + "')";

    query(sql);
}

exports.sqlUpdateVoucher = function (params, query) {
    var sql = "";
    sql += "UPDATE voucher";
    sql += " SET";
    if (params.voucherName != undefined)
        sql += " voucherName = '" + params.voucherName + "',";
    if (params.voucherDescription != undefined)
        sql += " voucherDescription = '" + params.voucherDescription + "',";
    if (params.code != undefined)
        sql += " code = '" + params.code + "',";
    if (params.value != undefined)
        sql += " value = '" + params.value + "',";
    if (params.start != undefined)
        sql += " start = '" + params.start + "',";
    if (params.end != undefined)
        sql += " end = '" + params.end + "'";
    sql += " WHERE";
    sql += " voucherId = '" + params.voucherId + "'";

    query(sql);
}

exports.sqlDeleteVoucher = function (id, query) {
    var sql = "";
    sql += "DELETE FROM voucher";
    sql += " WHERE";
    sql += " voucherId = '" + id + "'";

    query(sql);
}


/*
* ADMIN
*/
exports.sqlCheckProductSn = function (sn, query) {
    var sql = "";
    sql += "SELECT 1 FROM product";
    sql += " WHERE";
    sql += " productSn = '" + sn + "'";

    query(sql);
}

exports.sqlInsertProduct = function (params, query) {
    var sql = "";
    sql += " INSERT INTO product";
    sql += " (productSn, productName, description, amount, promotionId, categoryId)";
    sql += " VALUES";
    sql += " ('" + params.productSn + "', '" + params.productName + "', '" + params.productEditor + "', '" + params.productAmount + "', '" + params.productPromotion + "', '" + params.productCategory + "')";

    query(sql);
}

exports.sqlInsertPrice = function (productId, buy, sell, query) {
    var sql = "";
    sql += " INSERT INTO price";
    sql += " (priceId, buy, sell)";
    sql += " VALUES";
    sql += " ('" + productId + "', '" + buy + "', '" + sell + "')";

    query(sql);
}

exports.sqlInsertImage = function (productId, image1, image2, image3, image4, image5, query) {
    var sql = "";
    sql += " INSERT INTO image";
    sql += " (imageId, image1, image2, image3, image4, image5)";
    sql += " VALUES";
    sql += " ('" + productId + "', '" + image1 + "', '" + image2 + "', '" + image3 + "', '" + image4 + "', '" + image5 + "')";

    query(sql);
}

exports.sqlInsertYoutube = function (productId, yt1, yt2, yt3, query) {
    var sql = "";
    sql += " INSERT INTO youtube";
    sql += " (ytId, yt1, yt2, yt3)";
    sql += " VALUES";
    sql += " ('" + productId + "', '" + yt1 + "', '" + yt2 + "', '" + yt3 + "')";

    query(sql);
}



