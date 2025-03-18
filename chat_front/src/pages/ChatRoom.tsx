import { useContext } from "react";
import { useNavigate } from "react-router";

import ChatBox from "../components/ChatBox";
import { ChatContext } from "../context/ChatContext";

function ChatRoom() {
    // let { id } = useParams()
    const { room_id } = useContext(ChatContext)

    return (
        <>
            <h1>Chat Room {room_id}</h1>
            <ChatBox/>
        </>
    )
}

export default ChatRoom