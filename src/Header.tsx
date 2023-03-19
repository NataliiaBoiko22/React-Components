import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header className="head-wrapper">
      <nav>
        <ul>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
