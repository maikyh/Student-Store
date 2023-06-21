import * as React from "react"
import "./Navbar.css"
import CodePathLogo from "../../assets/codepath.f1b3e41a.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <a href="/">
            <img src={CodePathLogo} alt="codepath logo" /> 
          </a>
        </div>
      </div>
    </nav>
  )
}
