var log = require('./log');
var settings = require('./settings');
require('./db.js');
var net = require('net');

net.createServer(function(socket){

    var client = new require('./clients.js');
    var thisClient = new client();

    thisClient.socket = socket;

    thisClient.initiate();

    /*
    * Error
    */
    socket.on('error', thisClient.error);

    /*
    * Client Close
    */
    socket.on('end', thisClient.end);

    /*
    * Handle Event
    */
    socket.on('data', thisClient.data);

}).listen(settings.listenPort);

log.write("Initialize Completed, \nServer runnng on port: ", "------> " + settings.listenPort + " <-----");
