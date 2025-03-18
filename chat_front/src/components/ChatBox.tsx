import { FormEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import '../App.css'
import { ChatContext } from '../context/ChatContext'

function ChatBox() {
  const navigate = useNavigate()

  const {socket, setSocket, room_id, setRoom_id} = useContext(ChatContext)

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<String[]>([])

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    console.log("Send")
    e.preventDefault();
    if (message) {
      socket?.send(JSON.stringify({message: message, key: "message"}))
    }
    setMessage("")
  }

  useEffect(() => {
    if (!socket || !setSocket) return;
    socket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data) as {message: string, key: string};
      setMessages((prevMessages) => [...prevMessages, data.message])
      console.log(data.message)
    }

    socket.onclose = () => {
      console.log("lost connection")
      setTimeout(() => {
        console.log('reconnecting')
        setSocket(new WebSocket("http://localhost:8080"))
      }, 3000)
    }

    socket.onopen = () => {
      console.log("CONNECTED")
    }

    return () => {
      socket.onclose = null;
      socket.close();
    }
  }, [socket, setSocket])

  useEffect(() => {
    if (!room_id || room_id === '') {
        navigate("/join")
    }
}, [room_id, navigate])

  return (
    <>
      <ul id="messages">{messages.map((m, index) => <li key={"message_"+index} style={{"listStyle":'none'}}>{m}</li>)}</ul>
      <form id="form" onSubmit={handleSubmit}>
        <input id="input" autoComplete="off" value={message} onChange={(e) => {setMessage(e.target.value)}} />
        <button>Send</button>
      </form>
    </>
  )
}

export default ChatBox