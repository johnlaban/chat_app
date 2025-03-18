import { FormEvent, useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router";

function JoinChatRoom() {
  const navigate = useNavigate()
  const { socket, setSocket, room_id, setRoom_id } = useContext(ChatContext)
  const [roomValue, setRoomValue] = useState<string>("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!setSocket) return
    console.log("Send")
    if (roomValue && roomValue !== "") {
      const newSocket = new WebSocket("http://localhost:8080")
      newSocket.onopen = () => {
        newSocket.send(JSON.stringify({ key: "join_room", room_id: roomValue }))
      }
      setSocket(newSocket)
    }
  }

  useEffect(() => {
    if (!socket || !setRoom_id) return
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as {message: string, key: string, room_id: string};
      if (data.message === "joined_room"){
        setRoom_id(data.room_id)
        navigate("/room")
      }
    }
  }, [socket, setRoom_id, navigate])

  return (
    <>
      <h1> Join Room </h1>
      <form id="form" onSubmit={handleSubmit}>
        <input id="input" autoComplete="off" value={roomValue} onChange={(e) => { setRoomValue(e.target.value) }} />
        <button>Send</button>
      </form>
    </>
  )
}

export default JoinChatRoom