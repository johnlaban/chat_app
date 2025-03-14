import { Route, useParams } from "react-router";
import ChatBox from "../components/ChatBox";

function ChatRoom() {
    let { id } = useParams();

    return (
        <>
            <h1>Chat Room {id}</h1>
            <ChatBox id={id}/>
        </>
    )
}

export default ChatRoom