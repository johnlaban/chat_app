import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const rooms = {}

wss.on('connection', function connection(ws) {
  console.log("new connection")

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    data = JSON.parse(data)
    const {message, key} = data;
    if (key === "message"){
        console.log(message)
        ws.emit(JSON.stringify({message: message, key: "message"}))
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({message: message, key: "message"}));
          }
        });
    }
    console.log('received: %s', data);
  });

});
