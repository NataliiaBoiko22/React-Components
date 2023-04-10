import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "About Us";
      case "/main":
        return "Main";
      case "/forms":
        return "Support";
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
            <Link to="/forms">Support</Link>
          </li>
        </ul>
        <h1>{getPageTitle()}</h1>
      </nav>
    </header>
  );
}

export default Header;
