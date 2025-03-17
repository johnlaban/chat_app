import { FormEvent, useEffect, useState } from 'react'
import '../App.css'

// import { SOCKET } from '../main'

function ChatBox({id}:{id: string | undefined}) {

//   const [message, setMessage] = useState("")
//   const [messages, setMessages] = useState<String[]>([])

//   function handleSubmit(e:FormEvent<HTMLFormElement>) {
//     console.log("Send")
//     e.preventDefault();
//     if (message) {
//       SOCKET.emit("chat message", message)
//     }
//     setMessage("")
//   }

//   useEffect(() => {
//     SOCKET.connect()
//   }, [])

//   useEffect(() => {
//     SOCKET.on("chat message", (msg:String) => {
//       setMessages(messages => [...messages, msg])
//     })
//   }, [])

//   return (
//     <>
//       <ul id="messages">{messages.map((m, index) => <li key={"message_"+index} style={{"listStyle":'none'}}>{m}</li>)}</ul>
//       <form id="form" onSubmit={handleSubmit}>
//         <input id="input" autoComplete="off" value={message} onChange={(e) => {setMessage(e.target.value)}} />
//         <button>Send</button>
//       </form>
//     </>
//   )
}

export default ChatBox