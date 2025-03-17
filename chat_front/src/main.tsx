import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css"
import Layout from "./components/Layout";
import JoinChatRoom from "./pages/JoinChatRoom";
import ChatRoom from "./pages/ChatRoom";
import { ChatProvider } from "./context/ChatContext";

// import io from 'socket.io-client'
// export const SOCKET = io.connect("http://localhost:8080", {autoConnect: false})

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Layout>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/join" element={<JoinChatRoom />} />
          <Route path="/room/:id" element={<ChatRoom />}/>
        </Routes>
      </ChatProvider>
    </Layout>
  </BrowserRouter>
);
