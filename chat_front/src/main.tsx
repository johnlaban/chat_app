import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css"
import Layout from "./components/Layout";
import JoinChatRoom from "./pages/JoinChatRoom";

import io from 'socket.io-client'
import ChatRoom from "./pages/ChatRoom";
export const SOCKET = io.connect("http://localhost:3000", {autoConnect: false})

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/join" element={<JoinChatRoom />} />
        <Route path="/room/:id" element={<ChatRoom />}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);
