var db = require('./db');
var log = require('./log');

exports.deleteIdDeviceInWaitingRoom = function(id_device, callback){
  log.write("*/*delete*/* deleteIdDeviceInWaitingRoom", "Start");
  try{
    sql = "DELETE from tbl_waiting_room ";
    sql +="WHERE id_device = "+"'" + id_device + "'";

    db.execute(sql, function(data, err){
        if (err) {

            log.write("*/*find*/* deleteIdDeviceInWaitingRoom", "Error");
            callback(false);

        }else{

          log.write("*/*find*/* deleteIdDeviceInWaitingRoom", "Ok");
          callback(true);

        }
    });
  }catch(ex){
    log.write("*/*find*/* deleteIdDeviceInWaitingRoom exception", ex);
    callback(false);
  }
};
