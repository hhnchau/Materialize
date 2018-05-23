var log = require('./log');
var db = require('./db');

/*
*COMPUTER
*/
exports.findId = function(callback){
  try {

    var sql = "SELECT idComputer FROM tbl_computer ORDER BY RAND() LIMIT 1";
    db.execute(sql, function(data, err){
      callback(data, err);
    });

  }catch(ex){
    log.write("*/*User*/* Execute Sql Query", "---------->Exception<---------- " + ex);
    callback(false);
  };
}
