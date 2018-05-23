var zeroBuffer = new Buffer('00', 'hex');
require('./model.js');
var user = require('./user');
var computer = require('./computer');
var log = require('./log');
var room = require('./room.js');
var timer;

module.exports = packet = {

    /*
    * params: an array of javascript objects to be turned into buffers.
    */
    build: function(params){

        var packetParts = [];
        var packetSize = 0;

        params.forEach(function(param){
            var buffer;

            if(typeof param === 'string'){
                buffer = new Buffer(param, 'utf8');
                buffer = Buffer.concat([buffer, zeroBuffer], buffer.length + 1);
            }else if (typeof param === 'number'){
                buffer = new Buffer(2);
                buffer.writeUInt16LE(param, 0);
            }else {
                console.log("WARNING: Unknown data type in packet builder!");
            }

            packetSize += buffer.length;
            packetParts.push(buffer);

        });

        var dataBuffer = Buffer.concat(packetParts, packetSize);

        var size = new Buffer(1);

        if (dataBuffer.length > 255) {
          size.writeUInt8(255, 0);
        }else{
          size.writeUInt8(dataBuffer.length + 1, 0);
        }

        var finalPacket = Buffer.concat([size, dataBuffer], size.length + dataBuffer.length);

        return finalPacket;

    },

    /*
    * Parse a packet to be handled for a client
    */
    parse: function(client, data){

        var idx = 0;

        while( idx < data.length ){

            var packetSize = data.readUInt8(idx);
            var extractedPacket = new Buffer(packetSize);
            data.copy(extractedPacket, 0, idx, idx + packetSize)

            this.interpret(client, extractedPacket);

            idx += packetSize;

        }

    },

    /*
    * Server Listener
    */
    interpret: function(client, datapacket){
        var header = PacketModels.header.parse(datapacket);
        log.write("Event: ", header.command + "<-----");

        switch (header.command.toUpperCase()){

            /*
            * JOIN
            */
            case "JOIN":
              var data = PacketModels.join.parse(datapacket);
              user.join(data.idDevice, function(result){
                if (result) {
                  client.socket.write(packet.build(["JOIN", "TRUE", "Chau", 1, 2, "Huynh"]));
                }else{
                  client.socket.write(packet.build(["JOIN", "FALSE"]));
                }
              });
            break;

            /*
            * ENTER ROOM
            */
            case "ENTER-ROOM":
              //Get idDevice
              var data = PacketModels.join.parse(datapacket);
              //Enter Room
              room.enter_room(client, data.idDevice, function(client1, client2, table_position, info_user1, info_user2){
                if(client1 == 0 && client2 == 0){
                  //Start timer
                  log.write("", " TIMER -> START <------");
                  timer = setInterval(function(){
                    //Stop timer
                    clearInterval(timer);
                    log.write("", " TIMER -> STOP <------");

                    //Get Computer
                    computer.findId(function(data, err){
                      if(err){
                        log.write("", " ERROR <------");
                        //System error
                        client.socket.write(packet.build(["ENTER-ROOM", "FAIL"]));
                      }else{
                        if(data == false){
                          log.write("", " ERROR <------");
                          //System error
                          client.socket.write(packet.build(["ENTER-ROOM", "FAIL"]));
                        }else {
                          //Receiver Data
                          room.enter_room(client, data[0].idComputer, function(client1, client2, table_position, info_user1, info_user2){
                            if(info_user1 == null && info_user2 == null){
                              //Broascast all client in table
                              client1.socket.write(packet.build(["ENTER-ROOM", "FAIL"]));z
                            }else {
                              //Broascast all client in table
                              client1.socket.write(packet.build(["ENTER-ROOM", "TRUE", table_position, JSON.stringify(info_user1, null, 2), JSON.stringify(info_user2, null, 2)]));
                            }
                          });
                        }
                      }
                    });

                  }, 5000);
                }else {

                  //Stop timer
                  clearInterval(timer);
                  log.write("", " TIMER -> STOP <------");
                  //Receiver Data
                  if(info_user1 == null && info_user2 == null){
                    //Broascast all client in table
                    client1.socket.write(packet.build(["ENTER-ROOM", "FAIL"]));
                    client2.socket.write(packet.build(["ENTER-ROOM", "FAIL"]));
                  }else {
                    //Broascast all client in table
                    client1.socket.write(packet.build(["ENTER-ROOM", "TRUE", table_position, JSON.stringify(info_user1, null, 2), JSON.stringify(info_user2, null, 2)]));
                    client2.socket.write(packet.build(["ENTER-ROOM", "TRUE", table_position, JSON.stringify(info_user1, null, 2), JSON.stringify(info_user2, null, 2)]));
                  }

                }

              });
            break;

            /*
            * REGISTER
            */
            case "REGISTER":

                var data = PacketModels.register.parse(datapacket);

                user.register(data.username, data.password, function(result){
                  if (result){
                    //Register ok
                    client.socket.write(packet.build(["REGISTER", "TRUE"]));

                  }else{
                    //Register failr
                    client.socket.write(packet.build(["REGISTER", "FALSE"]));
                  }
                });
            break;

            /*
            * POS
            */
            case "POS":
                var data = PacketModels.pos.parse(datapacket);
                client.user.pos_x = data.target_x;
                client.user.pos_y = data.target_y;
                client.user.save();
                client.broadcastroom(packet.build(["POS", c.user.username, data.target_x, data.target_y]));
                log.write("POS: ", data);
            break;
        }

    }
}
