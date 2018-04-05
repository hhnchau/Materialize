var db = require('./db');
var log = require('./log');

//Get Info User After Login
exports.getInfoUserAfterLogin = function(id_device, callback){
        log.write("*/*get*/* getInfoUserAfterLogin", "Start");

        try{

          db.execute('SELECT * FROM tbl_user WHERE id_device= ' + "'"+id_device+"'", function(data, err){
              if (err) {

                  log.write("*/*get*/* getInfoUserAfterLogin", "---------->ERROR<----------");
                  callback(null);

              }else{

                log.write("*/*get*/* getInfoUserAfterLogin", "---------->OK<----------");
                callback(data);

              }
          });

        }catch(ex){
          log.write("*/*get*/* Execute Sql Query", "---------->Exception<----------");
          callback(null);
        }
};
