import { createContext, ReactNode, useEffect, useState } from 'react';


export const ChatContext = createContext<{
        socket: null | WebSocket, 
        setSocket: null | React.Dispatch<React.SetStateAction<WebSocket | null>>,
        room_id: null | string,
        setRoom_id: null | React.Dispatch<React.SetStateAction<string | null>>
    }> ({socket: null, setSocket: null, room_id: null, setRoom_id: null});


export function ChatProvider({children}: {children: ReactNode}) {
    const [socket, setSocket] = useState<null | WebSocket>(null);
    const [room_id, setRoom_id] = useState<null | string>(null)


    
    return <ChatContext.Provider value={{socket, setSocket, room_id, setRoom_id}}>
        {children}
    </ChatContext.Provider>
}