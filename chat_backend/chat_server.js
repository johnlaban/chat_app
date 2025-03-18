import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const rooms = {}

let id_counter = 0

wss.on('connection', function connection(ws) {

  ws.ID = "id_" + id_counter
  id_counter += 1

  console.log("new connection")

  ws.on('error', console.error);

  function leaveRoom() {
    if (!ws.room_id && ws.room_id !== '') return;
    console.log(ws.ID)
    rooms[ws.room_id] = rooms[ws.room_id].filter((value) => {
      return value.ID !== ws.ID
    })
    if (rooms[ws.room_id].length === 0){
      delete rooms[ws.room_id]
    }
    console.log("rooms", rooms)
  }

  ws.on('message', function message(data) {
    data = JSON.parse(data)
    const {message, key, room_id} = data;

    // CHAT MESSAGE
    if (key === "message" && message){
      if (!ws.room_id) {
        console.error("user has not joined a room");
        return
      }
      console.log(message)
      console.log(rooms)
      rooms[ws.room_id].forEach(function each(socket){
        socket.send(JSON.stringify({message: message, key: "message", yours: ws.ID === socket.ID}))
      })
    }

    // JOIN ROOM
    if (key == "join_room" && room_id) {
      console.log("join_room: "+ room_id + " id: " + ws.ID)
      ws.room_id = room_id
      if (rooms[room_id]) {
        rooms[room_id] = [...rooms[room_id], ws]
      } else {
        rooms[room_id] = [ws]
      }
      console.log(rooms)
      ws.send(JSON.stringify({message: "joined_room", key: "join_room", room_id: room_id}))
    }
    
    // CONTROLLED LEAVE
    if (key == "leave_room") {
      console.log("controlled leave_room: " + ws.room_id + " id: " + ws.ID)
      leaveRoom(ws)
    }

    console.log('received: %s', data);
  });

  // UNCONTROLLED LEAVE
  ws.on("close", function close(_) {
    console.log("controlled leave_room: " + ws.room_id + " id: " + ws.ID)
    leaveRoom(ws)
  })

});
