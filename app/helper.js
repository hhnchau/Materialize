var db = require('./db');
var log = require('./log');
exports.findUser = function (params, callback) {
    try {
        var sql = "SELECT 1 FROM user WHERE nickname = '" + params.username + "' AND password = '" + params.password + "'";
        db.execute(sql, function (data, err) {
            if (err) {
                log.error("findUser", err);
                callback(0);
            } else {
                if (data[0]) {
                    //Exist
                    log.write("findUser: ", data.length);
                    callback(1);
                } else {
                    //Not Exist
                    log.write("findUser: ", '0');
                    callback(0);
                }
            }
        });
    } catch (ex) {
        log.write("Execute Sql Query", "---------->Exception<---------- " + ex);
        callback(0);
    }
}