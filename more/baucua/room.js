var log = require('./log');
var user = require('./user');

var ROOM = [];
var TABLE = [];

exports.enter_room = function(idSocket, idDevice, callback){
  var client = {"idSocket":idSocket, "idDevice":idDevice};
  if(ROOM.length > 0){
    //Exist Client

    //Get Client [0]

    var guest_client = ROOM[0];
    //Clear client [0]

    clear_client_in_room(0);
    log.write("", "FIND OLD CLIENT <------");
    log.writeArray(guest_client);

    //all client to table
    var table = [];
    table.push(client);
    table.push(guest_client);

    //Create table
    var table_position = create_table(table);

    //get all client in table
    get_all_info_in_table(table_position, function(table_position, info_user1, info_user2){
      callback(TABLE[table_position][0].idSocket, TABLE[table_position][1].idSocket, table_position, info_user1, info_user2);
    });

  }else{
    //No Body
    //Add Client to ROOM
    ROOM.push(client);
    log.write("", " ADD NEW CLIENT <------");
    log.writeArray(ROOM);
    callback(0,0,0);
  }
}

exports.get_all_socket_in_table = function(table_position){
  if (TABLE.length > 0) {
    return TABLE[table_position];
  }else{
    return 0;
  }
}

create_table = function(table){
    var table_position = TABLE.length;
    TABLE[table_position] = table;
    log.write("", " CREATE NEW TABLE <------");
    log.writeArray(TABLE);
    return table_position;
};

clear_client_in_room = function(index){
  ROOM.splice(index, 1);
}

clear_table = function(table_position){
  TABLE.splice(table_position, 1);
}

get_all_info_in_table = function(table_position, callback){
  if(TABLE.length > 0){

      user.findUser(TABLE[table_position][0].idDevice, TABLE[table_position][1].idDevice, function(data, err){
        if(err){
          log.write("", " ERROR <------");
          callback(null);
        }else{
          if(data == false){
            log.write("", " ERROR <------");
            callback(null);
          }else {
            //Receiver Data
            callback(table_position, data[0], data[1]);
          }
        }
      });
  }
}
