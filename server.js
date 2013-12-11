var http = require('http');
var router = require('./router.js');

var chatServer = http.createServer(function(request, response) {
  router.route(request, response);
});

var port = 8080;
chatServer.listen(port);

var socketIO = require('./lib/chat_server.js');
socketIO.listen(chatServer);