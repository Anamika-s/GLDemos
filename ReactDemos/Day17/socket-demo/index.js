const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


var count =0;

io.on('connection',  function(socket) {
  console.log('a user connected');
});  

app.get("/", (req,res)=>
{
  // res.send("Hello");
  res.sendFile(__dirname +"/index.html")
})

app.listen(3000, ()=> console.log("Server listening at 3000 port"))

