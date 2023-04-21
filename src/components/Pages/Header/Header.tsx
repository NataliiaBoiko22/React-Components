import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import React from "react";
function Header() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "About Us";
      case "/main":
        return "Main";
      case "/forms":
        return "Form";
      default:
        return "";
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/forms">Form</Link>
          </li>
        </ul>
        <h1>{getPageTitle()}</h1>
      </nav>
    </header>
  );
}

export default Header;
