import { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import Sidebar from "./Sidebar";
import NewsTicker from "./NewsTicker";
import logo from "./logo.png";
import Calendar from "./Calendar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
      <img src="logo.png" alt="Logo" className="logo1" />
        <h1 className="nav-logo">LICORD</h1>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="./home">Home</a></li>
          <li><a href="./Rank">Star Board</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="./App">Logout</a></li>
        </ul>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <NewsTicker/>
      <Sidebar/>
    </nav>
  );
}
