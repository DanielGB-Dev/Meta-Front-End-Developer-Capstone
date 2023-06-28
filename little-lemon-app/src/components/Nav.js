import "../styles/Nav.css";
import Logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} />
        </li>
        <li>
          <NavLink to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active" className="nav-link">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservations"
            activeClassName="active"
            className="nav-link"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" activeClassName="active" className="nav-link">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
