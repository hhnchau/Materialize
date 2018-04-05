var log = require('./log');
var db = require('./db');
//register
//login
//update score
//log

/*
* JOIN
*/
exports.join = function(idDevice, callback){
  try {
          var sql = "SELECT 1 FROM tbl_user WHERE idDevice = '" + idDevice +"'" ;
          db.execute(sql, function(data, err){
            if(!err){
              log.write("*/*User*/* JOIN", " OK");
              if (data.length > 0) {
                callback(true);
              }else {
                callback(false);
              }
            }else{
              log.write("*/*USer*/* JOIN", " QUERY INCORRECT");
              callback(false);
            }
        });
  }catch(ex){
    log.write("*/*User*/* Execute Sql Query", "---------->Exception<---------- " + ex);
    callback(false);
  };
}

/*
* FIND USER
*/
exports.findUser = function(idDevice1, idDevice2, callback){
  try {

    var sql = "SELECT idDevice, nickName, address, star, life FROM tbl_user INNER JOIN tbl_score ON tbl_user.idDevice = tbl_score.id WHERE idDevice IN ('"+idDevice1+"', '"+idDevice2+"')";
    db.execute(sql, function(data, err){
      callback(data, err);
    });

  }catch(ex){
    log.write("*/*User*/* Execute Sql Query", "---------->Exception<---------- " + ex);
    callback(false);
  }
}

/*
*RGISTER
*/
exports.register = function(username, password, callback){
  try {
          var sql = data.query;
          db.execute(sql, function(object, err){
            if(!err){
              log.write("*/*Controller*/* adminPage", " OK");
              callback(true);
            }else{
              log.write("*/*Controller*/* adminPage", " QUERY INCORRECT");
              callback(false);
            }
        });
  }catch(ex){
    log.write("*/*Controller*/* Execute Sql Query", "---------->Exception<---------- " + ex);
    callback(false);
  };
}
