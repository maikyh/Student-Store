import * as React from "react"
import "./Logo.css"
import CodePathLogo from "../../assets/codepath.f1b3e41a.svg";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="logo">
        <Link to="/">
            <img src={CodePathLogo} alt="codepath logo" /> 
        </Link>
    </div>
  )
}
