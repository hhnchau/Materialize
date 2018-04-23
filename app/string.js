
// SELECT allProduct.*, raiting.*
// FROM
// (SELECT p.productId, p.productName, pri.sell, pro.value, pro.percent, img.image1
// FROM product as p
// LEFT JOIN price as pri ON p.productId = pri.priceId
// LEFT JOIN image as img ON p.productId = img.imageId
// LEFT JOIN promotion as pro ON p.promotionId = pro.promotionId) as allProduct
// LEFT JOIN
// (SELECT countLikes.productId, countLikes.likeTotal, countRate.rateTotal, countComment.commentTotal
// FROM
// (SELECT p.productId, count(*) as likeTotal
// FROM product as p, likes as l
// WHERE p.productId = l.likesId
// GROUP BY p.productId) as countLikes
// LEFT JOIN
// (SELECT p.productId, count(*) as rateTotal
// FROM product as p, rate as r
// WHERE p.productId = r.rateId
// GROUP BY p.productId) as countRate ON countLikes.productId = countRate.productId
// LEFT JOIN
// (SELECT p.productId, count(*) as commentTotal
// FROM product as p, comment as c
// WHERE p.productId = c.commentId
// GROUP BY p.productId) as countComment ON countLikes.productId = countComment.productId) as raiting
// ON allProduct.productId = raiting.productId
exports.sqlFindAllProduct = function (query) {
    var sql = "";
    sql += "SELECT allProduct.*, raiting.*";
    sql += " FROM";
    sql += " (SELECT p.productId, p.productName, pri.sell, pro.value, pro.percent, img.image1";
    sql += " FROM product AS p";
    sql += " LEFT JOIN price AS pri ON p.productId = pri.priceId";
    sql += " LEFT JOIN image AS img ON p.productId = img.imageId";
    sql += " LEFT JOIN promotion AS pro ON p.promotionId = pro.promotionId) AS allProduct"
    sql += " LEFT JOIN";
    sql += " (SELECT countLikes.productId, countLikes.likeTotal, countRate.rateTotal, countComment.commentTotal";
    sql += " FROM";
    sql += " (SELECT p.productId, count(*) AS likeTotal";
    sql += " FROM product AS p, likes AS l";
    sql += " WHERE p.productId = l.likesId";
    sql += " GROUP BY p.productId) AS countLikes";
    sql += " LEFT JOIN";
    sql += " (SELECT p.productId, count(*) AS rateTotal"
    sql += " FROM product AS p, rate AS r"
    sql += " WHERE p.productId = r.rateId";
    sql += " GROUP BY p.productId) AS countRate ON countLikes.productId = countRate.productId";
    sql += " LEFT JOIN";
    sql += " (SELECT p.productId, count(*) AS commentTotal";
    sql += " FROM product AS p, comment AS c";
    sql += " WHERE p.productId = c.commentId"
    sql += " GROUP BY p.productId) AS countComment ON countLikes.productId = countComment.productId) AS raiting";
    sql += " ON allProduct.productId = raiting.productId";

    query(sql);
};

// SELECT p.*, pri.sell, pro.value, pro.percent, img.*, yt.*
// FROM product AS p
// LEFT JOIN price as pri ON p.productId = pri.priceId
// LEFT JOIN promotion as pro ON p.productId = pro.promotionId
// LEFT JOIN image as img ON p.productId = img.imageId
// LEFT JOIN youtube as yt ON p.productId = yt.ytId
// WHERE p.productId = '10'


// SELECT countLikes.productId, countLikes.likeTotal, countRate.rateTotal, countComment.commentTotal
// FROM
// (SELECT p.productId, count(*) AS likeTotal
// FROM product AS p, likes AS l
// WHERE p.productId = l.likesId
// GROUP BY p.productId) AS countLikes
// LEFT JOIN
// (SELECT p.productId, count(*) AS rateTotal
// FROM product AS p, rate AS r
// WHERE p.productId = r.rateId
// GROUP BY p.productId) AS countRate ON countLikes.productId = countRate.productId
// LEFT JOIN
// (SELECT p.productId, count(*) AS commentTotal
// FROM product as p, comment AS c
// WHERE p.productId = c.commentId
// GROUP BY p.productId) AS countComment ON countLikes.productId = countComment.productId


// SELECT u.nickname, rat.*
// FROM user as u
// LEFT JOIN rate as rat ON u.userId = rat.userId
// WHERE rat.rateId = '7'


// SELECT u.nickname, com.*
// FROM user AS u
// LEFT JOIN comment AS com ON u.userId = com.userId
// WHERE com.commentId = '8'

// SELECT u.nickname, l.*
// FROM user AS u
// LEFT JOIN likes AS l ON u.userId = l.userId
// WHERE l.likesId = '8'

exports.sqlFindProduct = function (productId, query) {
    var sql = "";
    sql += "SELECT ";
};