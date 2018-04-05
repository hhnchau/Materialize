var db = require('./db');
var log = require('./log');
var util = require('util');

//postCreateUser
exports.postCreateUser = function(id_device, reqBody, callback){
    log.write("*/*post*/* postCreateUser", "Start "+reqBody);
    try {
      var data = JSON.parse(reqBody);

      //Write to Database
      log.write("*/*post*/* Check nickname", "true");

      var sql = "INSERT INTO tbl_user (id_device, nickname, avatar) VALUES";
      sql += util.format(" ('%s', '%s', '%s')", id_device, data.nickname, data.avatar);

      db.execute(sql, function(data, err){
          if (err) {
              //Error
              log.write("*/*post*/* Execute Sql Query", "---------->ERROR<----------");
              callback(false);

          }else{
            //Successful
            log.write("*/*post*/* Execute Sql Query", "---------->OK<----------");
            callback(true);
          }
      });

    }catch(ex){
      log.write("*/*post*/* Execute Sql Query", "---------->Exception<----------");
      callback(false);
    }
}

//Insert id device to waiting room
exports.insertIdDeviceInWaitingRoom = function(id_device, callback){
    log.write("*/*post*/* insertIdDeviceInWaitingRoom", "Start");

    try{
      var sql = "INSERT INTO tbl_waiting_room (id_device) VALUES";
      sql += util.format(" ('%s')", id_device);
        db.execute(sql, function(data, err){
          if (err){

            log.write("*/*post*/* Execute Sql Query error", err);
            callback(false);

          }else{

              log.write("*/*post*/* Execute Sql Query", "successful" );
              callback(true);

          }
        });
    }catch(ex){
      log.write("*/*post*/* Execute Sql Query exception", ex);
      callback(false);
    }
};
