var db = require('./db');
var log = require('./log');
var util = require('util');

//find Session
exports.findBySession = function(id_device, callback){
    log.write("*/*find*/* findBySession", "Start");
    try{
        var sql = "SELECT session FROM tbl_user WHERE id_device = ";
        sql += util.format(" ('%s')", id_device);
        db.execute(sql, function(data, err){
          if (err){
            log.write("*/*find*/* findBySession error", err);
            callback(null);
          }else{
            if (data[0]) {
              log.write("*/*find*/* findBySession successful", data[0].session);
              callback(data[0].session);
            }else{
              log.write("*/*find*/* findBySession successful", "null");
              callback(null);
            }
          }
        });
    }catch(ex){
      log.write("*/*find*/* findBySession exception", ex);
      callback(null);
    }
}

//find Id
exports.findById = function(id_device, callback){
    log.write("*/*find*/* findById", "Start");
    try{
        var sql = "SELECT 1 FROM tbl_user WHERE id_device = ";
        sql += util.format(" ('%s')", id_device);
        db.execute(sql, function(data, err){
          if (err){
            log.write("*/*find*/* findById error", err);
            callback(false);
          }else{
            if (data[0]) {
              log.write("*/*find*/* findById successful", data.length);
              callback(true);
            }else{
              log.write("*/*find*/* findById successful", "null");
              callback(false);
            }
          }
        });
    }catch(ex){
      log.write("*/*find*/* findById exception", ex);
      callback(false);
    }
}

//find nickname
exports.findByNickname = function(nickname, callback){
    log.write("*/*find*/* findByNickname", "Start");
    try{
        var sql = "SELECT 1 FROM tbl_user WHERE nickname = ";
        sql += util.format(" ('%s')", nickname);
        db.execute(sql, function(data, err){
          if (err){
            log.write("*/*find*/* findByNickname error", err);
            callback(false);
          }else{
            if (data[0]) {
              log.write("*/*find*/* findByNickname successful", data.length);
              callback(true);
            }else{
              log.write("*/*find*/* findByNickname successful", "null");
              callback(false);
            }
          }
        });
    }catch(ex){
      log.write("*/*find*/* findByNickname exception", ex);
      callback(false);
    }
}

//find random id_device
exports.findRandomById = function(callback){
    var sql = "SELECT id_device FROM tbl_waiting_room ORDER BY RAND() LIMIT 1";
    db.execute(sql, function(data, err){
      if (err){
        log.write("*/*find*/* findRandomById error", err);
        callback(null);
      }else{
        if (data[0]) {
          log.write("*/*find*/* findRandomById successful", data[0].id_device);

          var id_device_temp = data[0].id_device;

          log.write("*/*find*/* deleteIdDeviceFound", "Start");
          sql = "DELETE from tbl_waiting_room ";
          sql +="WHERE id_device = "+"'" + data[0].id_device + "'";

          db.execute(sql, function(data, err){
              if (err) {

                  log.write("*/*find*/* deleteIdDeviceFound", "Error");
                  callback(null);

              }else{

                log.write("*/*find*/* deleteIdDeviceFound", "Ok");
                callback(id_device_temp);

              }
          });

        }else{
          log.write("*/*find*/* findRandomById successful", "null");
          callback(null);
        }
      }
    });
};
