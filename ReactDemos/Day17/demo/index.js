const express = require('express');
const { chmodSync } = require('fs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


var count =0;

io.on('connection',  function(socket) {
  count++;
  console.log('a user connected');
  io.emit('usercount', count);
  socket.on('disconnect', function()
  {
    console.log("user disoconnescted")
    count--;
    io.emit('usercount', count);
  })
  
 socket.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      
     
     

  });

  });
}) 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});