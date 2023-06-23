import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <ul className="nav-links">
          <li><span>Home</span></li>
          <li><span>About Us</span></li>
          <li><span>Contact Us</span></li>
          <li><span>Buy Now</span></li>
        </ul>
      </div>
    </nav>
  );
}
