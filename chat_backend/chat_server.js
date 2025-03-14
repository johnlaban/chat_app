const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {cors: {origin: "http://127.0.0.1:5173"}});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id);
    socket.on('chat message', (msg) => {
      console.log(msg)
      io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected: ' + socket.id);
    });

});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});