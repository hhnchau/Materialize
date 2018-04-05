var db = require('./db');
var log = require('./log');

exports.updateSession = function (session, id_device, callback){
  try {
      log.write("*/*put*/* updateSession", "Start");

      var sql = "UPDATE tbl_user SET ";
      sql +="session = '" +session+ "'";
      sql += " WHERE id_device = " + "'"+id_device+"'";
      log.write("*/*put*/* updateSession", sql);

      db.execute(sql, function(data, err){
          if (err) {
            log.write("*/*put*/* updateSession", "fail");
            callback(false);
          }else{
            log.write("*/*put*/* updateSession", "successful");
            callback(true);
          }
      });

  }catch(ex){
    log.write("*/*put*/* updateSession", "exception");
    callback(false);
  }
};
