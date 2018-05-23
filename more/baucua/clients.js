var now = require('performance-now');
var _ = require('underscore');
require('./packet.js');
var log = require('./log');
var settings = require('./settings');

module.exports = function(){

    var client = this;

    /*
    * Initialization
    */
    this.initiate = function(){

      log.write("Init Client:", "--> connected <--");
      client.socket.write(packet.build(["CONNECTED", settings.Server_Status]));
    };

    /*
    * Enter Room
    */
    // this.enterroom = function(selected_room){
    //
    //     maps[selected_room].clients.forEach(function(otherClient){
    //         otherClient.socket.write(packet.build(["ENTER", client.user.username, client.user.pos_x, client.user.pos_y]))
    //     })
    //
    //     maps[selected_room].clients.push(client);
    //
    // };
    //
    // /*
    // * Broascast
    // */
    // this.broadcastroom = function(packetData){
    //
    //     maps[client.user.current_room].clients.forEach(function(otherClient){
    //
    //         if(otherClient.user.username != client.user.username){
    //             otherClient.socket.write(packetData);
    //         };
    //
    //     })
    //
    // };

    /*
    *  Handle Event
    */
    this.data = function(data){
      packet.parse(client, data);
    };

    /*
    * Error
    */
    this.error = function(err){
      log.write("Error: " + err.toString());
    };

    /*
    * End
    */
    this.end = function(){
      log.write("Client Close: ", "--->CLOSE<---");
    };

}
