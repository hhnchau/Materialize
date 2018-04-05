var http = require('http');
var url = require('url');
var sql = require('./controller');
var settings = require('./settings');
var httpMsg = require('./httpMsg');
var route = require('./route');
var log = require('./log');
var find = require('./find');


var tools = require('./tools');
console.log("OOOO", tools.md5("Chau"));

console.log("OOOO", tools.getNowTimestamp());
var t = tools.getNowTimestamp();
console.log("OOOO", tools.getFormatDate(t));
console.log("OOOO", tools.getCurrentDate());
console.log("OOOO", tools.checkNickname("A123{}"));
//1493488093534


var time1 = setInterval(function(){
  console.log('test');
  clearInterval(time1);
}, 1000);

var time2 = setInterval(function(){
  console.log('test---`2`');
  clearInterval(time1);
  clearInterval(time2);
}, 5000);


// find.findRandomById(function(id_device_guest){
//     if (id_device_guest) {
//       console.log("findRandomById-----"+ id);
//     }else {
//       console.log("findRandomById------>null");
//     }
// });




//Create Server
http.createServer(function(req, res){
  var secret = req.headers['secret'];
  var id_device = req.headers['id_device'];
  log.write("\n\n*/*server*/* Id_Device",id_device);
  var session = req.headers['session'];
  log.write("*/*server*/* Session",session);

  //Check secrect key
  if (secret === settings.secret){

    //Secrect Key correct
    log.write("*/*server*/* Check Secret Key", "OK.");

              //Check Session

              find.findBySession(id_device, function(s){
                      if (s) {
                          log.write("*/*server*/* Read Session", "OK. ------>"+ s );
                          if (session === s) {
                                  log.write("*/*server*/* Check Session", "OK.");

                                  //Check Method
                                  switch (req.url) {

                                          //postInfoLogin
                                          case route.postEnterWaitingRoom:
                                              if (req.method === 'POST') {
                                                log.write("*/*server*/*"+"Case", route.postEnterWaitingRoom);
                                                sql.postEnterWaitingRoom(req, res, id_device);
                                              }else{
                                                log.write("*/*server*/*"+"Case"+route.postEnterWaitingRoom, "Method Not Support");
                                                httpMsg.show405(req,res);
                                              }
                                              break;

                                          //putInfoLogin
                                          case route.putInfoLogin:

                                              log.write("*/*server*/*"+ "Case", route.putInfoLogin);
                                                  var reqBody = '';
                                                  req.on("data", function (data){
                                                      reqBody += data;
                                                      if(reqBody.length > 1e7){//10MB
                                                          log.write("*/*server*/*"+ "Case "+route.putInfoLogin, "show413");
                                                          httpMsg.show413(req, res);
                                                          res.end();
                                                      }
                                                  });
                                                  req.on("end", function(){
                                                        log.write("*/*server*/*"+ "Case "+route.putInfoLogin, JSON.stringify(reqBody, null, 2) );
                                                        sql.update(req, res, reqBody);
                                                  });
                                              break;

                                          //deleteInfoLogin
                                          case route.deleteInfoLogin:

                                              log.write("*/*server*/*"+ "Case", route.deleteInfoLogin);
                                              var reqBody = '';
                                              req.on("data", function (data){
                                                  reqBody += data;
                                                  if(reqBody.length > 1e7){//10MB
                                                          log.write("*/*server*/*"+ "Case "+route.deleteInfoLogin, "show413");
                                                          httpMsg.show413(req, res);
                                                          res.end();
                                                    }
                                                  });
                                                  req.on("end", function(){
                                                    log.write("*/*server*/*"+ "Case "+route.deleteInfoLogin, JSON.stringify(reqBody, null, 2) );
                                                    sql.delete(req, res, reqBody);
                                                  });
                                              break;
                                          //Default
                                          default:

                                              log.write("*/*server*/*"+ "Case Method Not Support", "show405");
                                              httpMsg.show405(req, res);
                                              res.end();
                                              break;
                                  }

                          //Session fail
                          }else {
                                sessionFail(req, res, id_device);
                          }
                      }else{
                          sessionFail(req, res, id_device);
                      }
              });

  //Secret Key fail
  }else {
    //Secrect Key correct
      log.write("*/*server*/* Check Secret Key", "ERROR");
      httpMsg.show413(req, res);
      res.end();
  }

//Server Listen
}).listen(process.env.PORT || settings.listenPort, function(){
  log.write("Server is listening at port", settings.listenPort);
});

//Session Fail
function sessionFail(req, res, id_device){
  log.write("*/*server*/* Check Session", "ERROR.");

  switch(req.url){
        //Get Api Setting
        case route.getApiSetting:
                if (req.method === 'GET') {
                  log.write("*/*server*/*"+"Case", route.getApiSetting);
                  sql.getApiSetting(req, res, id_device);
                }else{
                  log.write("*/*server*/*"+"Case"+route.getApiSetting, "Method Not Support");
                  httpMsg.show405(req,res);
                }

              break;

        //Post Create User
        case route.postCreateUser:
                if (req.method === 'POST') {
                  log.write("*/*server*/*"+"Case", route.postCreateUser);
                  var reqBody = '';
                  req.on("data", function (data){
                        reqBody += data;

                        if(reqBody.length > 1e7){//10MB
                              log.write("*/*server*/*"+ "Case "+route.postCreateUser, "show413");
                              httpMsg.show413(req, res);
                        }
                  });

                  req.on("end", function(){
                        log.write("*/*server*/*"+ "Case "+route.postCreateUser, JSON.stringify(reqBody, null, 2) );
                        sql.postCreateUser(req, res, reqBody, id_device);
                  });
                }else{
                  log.write("*/*server*/*"+"Case"+route.postCreateUser, "Method Not Support");
                  httpMsg.show405(req,res);
                }

              break;

        //getInfoUserAferLogin
        case route.getInfoUserAfterLogin:
                if (req.method === 'GET') {
                  log.write("*/*server*/*"+ "Case", route.getInfoUserAfterLogin);
                  //Insert Session to Database
                  var session = tools.createSession();
                  //Get Info User After Login
                  sql.getInfoUserAfterLogin(req, res, session, id_device);
                }else{
                  log.write("*/*server*/*"+"Case"+route.getInfoUserAfterLogin, "Method Not Support");
                  httpMsg.show405(req,res);
                }
            break;

        //default
        default:

              log.write("*/*server*/*"+ "Case"+"Session incorrect", "show412");
              httpMsg.show412(req, res)
              res.end();

              break;
  }
};
