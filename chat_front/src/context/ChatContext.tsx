import { createContext, ReactNode, useEffect, useState } from 'react';


export const ChatContext = createContext<{
        socket: null | WebSocket, 
        setSocket: null | React.Dispatch<React.SetStateAction<WebSocket | null>>
    }> ({socket: null, setSocket: null});


export function ChatProvider({children}: {children: ReactNode}) {
    const [socket, setSocket] = useState<null | WebSocket>(null);


    useEffect(() => {
        setSocket(new WebSocket("http://localhost:8080"))
    }, [])


    
    return <ChatContext.Provider value={{socket, setSocket}}>
        {children}
    </ChatContext.Provider>
}