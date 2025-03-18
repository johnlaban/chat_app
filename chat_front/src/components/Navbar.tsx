import React from 'react'
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
        <div style={{display: "flex", gap: "2rem"}}>
            <Link to="/" className="brand-logo" style={{border: "1px solid blue", borderRadius: "20%", padding: "5px"}}>Home</Link>
            <Link to="/join" className="brand-logo" style={{border: "1px solid blue", borderRadius: "20%", padding: "5px"}}>Join Chat</Link>
        </div>
    </nav>
  )
}

export default Navbar