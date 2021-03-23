var express = require('express');
var socket = require('socket.io');

// App setup

var app = express();
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
  console.log(`listening to requests on http://localhost:${PORT}`);
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function (socket) {
  console.log('a socket connection has been made with', socket.id);

  socket.on('chat', function (data) {
    io.sockets.emit('chat', data);
  });
});
