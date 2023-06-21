import * as React from "react"
import "./Navbar.css"
import CodePathLogo from "../../assets/codepath.f1b3e41a.svg";
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo/>
      </div>
    </nav>
  )
}
