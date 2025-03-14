import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css"

import io from 'socket.io-client'
export const SOCKET = io.connect("http://localhost:3000", {autoConnect: false})

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
    </Routes>
  </BrowserRouter>
);
