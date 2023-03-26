import { Link } from "react-router-dom";
import "./header.css";
function Header() {
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
      </nav>
    </header>
  );
}

export default Header;
