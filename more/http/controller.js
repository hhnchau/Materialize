var db = require('./db');
var log = require('./log');
var httpMsg = require('./httpMsg');
var status = require('./status');
var tools = require('./tools');
var find = require('./find');
var util = require('util');
var post = require('./post');
var get = require('./get');
var put = require('./put');
var del = require('./delete');
Models = require('./models');
var models;

//Get Api settings-->Check login or exist register
exports.getApiSetting = function(req, res, id_device){
  log.write("*/*controller*/* getApiSetting", "Start");
  models = new Models({});
  try{
            find.findById(id_device, function(exist){
                /*
                  FIND ID DEVICE EXIST
                */
              if (exist) {
                log.write("*/*get*/* findById", "true");
                models.FormSetting(true);
                httpMsg.sendJson(req, res, models.data);
                /*
                  FIND ID DEVICE NULL
                */
              }else {
                log.write("*/*get*/* findById", "false");
                models.FormSetting(false);
                httpMsg.sendJson(req, res, models.data);
              }
            });

  }catch(ex){
    log.write("*/*controller*/* getApiSetting", "---------->Exception<----------");
    httpMsg.show500(req, res, err);
  }
};

//Post Create User
exports.postCreateUser = function(req, res, reqBody, id_device){
  log.write("*/*controller*/* postCreateUser", "Start"+reqBody);
  models = new Models({});
  var data = JSON.parse(reqBody);
  try {
    /*
    *  FIND ID DEVICE
    */
    find.findById(id_device, function(exist){

        //ID DEVICE EXIST
      if (exist) {
        log.write("*/*controller*/* findByNickname", "true");
        models.FormResult(status.existIdDevice, status.existMessageIdDevice);
        httpMsg.sendJson(req, res, models.data);

        //ID DEVICE NOT EXIST
      }else {

        //CHECK PARAMS NICKNAME NULL
        if (!data.nickname) {
          log.write("*/*controller*/* nickname", "null");
          models.FormResult(status.nullNickname, status.nullMessageNickname);
          httpMsg.sendJson(req, res, models.data);
          return;

        //CHECK PARAMS NICKNAME OK
        }else {
          /*
          *  FIND NICKNAME
          */
          find.findByNickname(data.nickname, function(exist){

              //NICKNAME EXIST
            if (exist){
                    log.write("*/*controller*/* findByNickname", "true");
                    models.FormResult(status.existNickname, status.existMessageNickname);
                    httpMsg.sendJson(req, res, models.data);

              //NICKNAME NOT EXIST
            }else {
                    log.write("*/*controller*/* findByNickname", "false");

                    //CHECK LENGTH NICKNAME
                    if (data.nickname.length < 6){

                          //LENGTH NICKNAME < 6
                          log.write("*/*controller*/* Length nickname is", data.nickname.length);
                          models.FormResult(status.minLengthNickname, status.minLengthMessageNickname);
                          httpMsg.sendJson(req, res, models.data);
                    }else {

                          //LENGTH NICKNAM OK
                          log.write("*/*controller*/* Length nickname is", data.nickname.length);

                          //CHECK FORMAT NICKNAME
                          if (!tools.checkNickname(data.nickname)) {

                                // FORMAT ERROR
                                log.write("*/*controller*/* Check format nickname", "false");
                                models.FormResult(status.invalidNickname, status.invalidMessageNickname);
                                httpMsg.sendJson(req, res, models.data);
                          }else{

                                //FORMAT OK
                                log.write("*/*controller*/* Check forma nickname", "true");

                                //INSERT DATABASE
                                post.postCreateUser(id_device, reqBody, function(ok){
                                  if(ok){
                                    //INSERT OK
                                    log.write("*/*controller*/* Execute Sql Query", "---------->OK<----------");
                                    models.FormResult(status.createOk, status.createMessageOk);
                                    httpMsg.sendJson(req, res, models.data);
                                  }else {
                                    //INSERT FAIL
                                    log.write("*/*controller*/* Insert Database", "---------->FAIL<----------");
                                    httpMsg.show500(req, res, "Insert Database fail");
                                  }
                                });
                          }
                    }
                }
          });
        }
      }
    });
  }catch(ex){
    log.write("*/*controller*/* Execute Sql Query", "---------->Exception<----------");
    httpMsg.show500(req, res, ex);
  }
};

//Get Info User After Login
exports.getInfoUserAfterLogin = function(req, res, session, id_device){
    log.write("*/*controller*/* getInfoUserAfterLogin", "Start");
    /*
    *  UPDATE SESSION TO DATABASE
    */
    put.updateSession(session, id_device, function(successful){

      //UPDATE OK
      if (successful) {
          log.write("*/*controller*/* updateSession", "successful");

          //GET INFO USER
          get.getInfoUserAfterLogin(id_device, function(data){
             if (data){

               //GET INFO OK
               models = new Models({});
               if (data[0]) {
                   models.FormInfoUser(status.getInfoUserAfterLoginSuccessful, status.getInfoUserAfterLoginSuccessfulMessage,data[0]);
               }else {
                   models.FormInfoUser(status.getInfoUserAfterLoginUnSuccessful, status.getInfoUserAfterLoginUnSuccessfulMessage,data[0]);
               }
               httpMsg.sendJson(req, res, models.data);

             }else {

               //GET INFO FAIL
               httpMsg.show500(req, res, "Get Info False");

             }
          });

      //UPDATE FAIL
      }else{
          log.write("*/*controller*/* updateSession", "fail");
          httpMsg.show500(req, res, "Update Session fail");
      }
    });
};

//Post Enter Waiting room
exports.postEnterWaitingRoom = function(req, res, id_device){
    log.write("*/*controller*/* postEnterWaitingRoom", "Start");

    try {
      find.findRandomById(function(id_device_guest){
        /*
        *  FIND RANDOM ID GUEST OK
        */
        if (id_device_guest) {
                  log.write("*/*controller*/* findRandomById", "true");

                  // DELETE ID DVICE FOUND
                  del.deleteIdDeviceInWaitingRoom(id_device_guest, function(ok){
                    if(ok){
                      log.write("*/*controller*/* deleteIdDeviceInWaitingRoom", "Ok");

                      //Inset id_device + id_device_guest to tbl_private_room
                    }else {
                      log.write("*/*controller*/* deleteIdDeviceInWaitingRoom", "Fail");

                      // Goto Compuper Player
                    }
                  });
          /*
          *  FIND RANDOM ID GUEST FAIL
          */
        }else {
                  log.write("*/*controller*/* findRandomById null----->", "Register Waiting Room");
                  //INSERT ID DEVICE TO TBL_WAITING_ROOM
                  post.insertIdDeviceInWaitingRoom(id_device, function(ok){
                    if (ok) {
                      log.write("*/*controller*/* insertIdDeviceInWaitingRoom----->", "Ok");

                      //Wait 10s
                    }else {
                      log.write("*/*controller*/* insertIdDeviceInWaitingRoom----->", "Fail");

                      // Goto Compuper Player
                    }
                  });
        }
      });
    }catch(ex){
      log.write("*/*controller*/* postEnterWaitingRoom", "---------->Exception<----------");
      httpMsg.show500(req, res, ex);
    }
};







//Get All Info User
exports.getInfoUser = function(req, res){

        log.write("*/*controller*/* getInfoUser", "Start");

        try{
              var sql = "SELECT * FROM sv";
              db.execute(sql, function(data, err){
                  if (err) {

                        log.write("*/*controller*/* Execute Sql Query", "---------->ERROR<----------");
                        httpMsg.show500(req, res, err);
                        res.end();

                  }else{

                        log.write("*/*controller*/* Execute Sql Query", "---------->OK<----------");
                        httpMsg.sendJson(req, res, data);
                        res.end();
                  }
              });

        }catch(ex){
          log.write("*/*controller*/* Execute Sql Query", "---------->Exception<----------");
          httpMsg.show500(req, res, err);
          res.end();
        }
};

exports.getList = function(req, res){
  db.execute('SELECT * FROM sv', function(data, err){
      if (err) {

          httpMsg.show500(req, res, err);
          res.end();

      }else{

        httpMsg.sendJson(req, res, data);
        res.end();
      }
  });
};

exports.get = function (req, res, id){

  db.execute('SELECT * FROM sv WHERE id=' + id, function(data, err){
      if (err) {

          httpMsg.show500(req, res, err);
          res.end();

      }else{

        httpMsg.sendJson(req, res, data);
        res.end();

      }
  });

};

exports.postInfoLogin = function (req, res, reqBody){
        log.write("*/*controller*/* postInfoLogin", "Start");
            try {
              if (!reqBody) throw new Error('Input not valid');
              var data = JSON.parse(reqBody);
              if(data){
                var sql = "INSERT INTO sv (ten, tuoi, diachi) VALUES";
                sql += util.format(" ('%s', %d, '%s')", data.ten, data.tuoi, data.diachi);

                db.execute(sql, function(data, err){
                    if (err) {

                        log.write("*/*controller*/* Execute Sql Query", "---------->ERROR<----------");
                        httpMsg.show500(req, res, err);
                        res.end();

                    }else{

                      log.write("*/*controller*/* Execute Sql Query", "---------->OK<----------");
                      httpMsg.send200(req, res);
                      res.end();

                    }
                });
              }else{
                throw new Error('Input not valid');
              }
            }catch(ex){
              log.write("*/*controller*/* Execute Sql Query", "---------->Exception<----------");
              httpMsg.show500(req, res, ex);
              res.end();
            }
};

exports.update = function (req, res, reqBody){
  try {
    if (!reqBody) throw new Error('Input not valid');
    var data = JSON.parse(reqBody);
    if(data){
      if(!data.id) throw new Error("Empno no provided");
      var sql = "UPDATE sv SET ";
      var isDataProvided = false;
      console.log(1);
      if (data.ten) {
        sql +="ten = '" + data.ten + "'," ;
        isDataProvided = true;
      }

      if (data.tuoi) {
        sql +="tuoi = " + data.tuoi + "," ;
        isDataProvided = true;
      }

      if (data.diachi) {
        sql +="diachi = '" + data.diachi + "'," ;
        isDataProvided = true;
      }

      sql = sql.slice(0, -1); //remove last comma
      sql +=" WHERE id = " + data.id;

      console.log(sql);

      db.execute(sql, function(data, err){
          if (err) {

              httpMsg.show500(req, res, err);
              res.end();

          }else{

            httpMsg.send200(req, res);
            res.end();

          }
      });
    }else{
      throw new Error('Input not valid');
    }
  }catch(ex){
    httpMsg.show500(req, res, ex);
  }
};

exports.delete = function (req, res, reqBody){
  try {
    if (!reqBody) throw new Error('Input not valid');
    console.log(reqBody);
    var data = JSON.parse(reqBody);
    if(data){
      console.log(data.id);
      if(!data.id) throw new Error("Loi roi");
      var sql = "DELETE from sv ";
      sql +="WHERE id = " + data.id;
      console.log(sql);
      db.execute(sql, function(data, err){
          if (err) {

              httpMsg.show500(req, res, err);
              res.end();

          }else{

            httpMsg.send200(req, res);
            res.end();
          }
      });
    }else{
      throw new Error('Input not valid');
    }
  }catch(ex){
    httpMsg.show500(req, res, ex);
  }
};
