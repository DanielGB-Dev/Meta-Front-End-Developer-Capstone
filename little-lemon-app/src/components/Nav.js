import "../styles/Nav.css";
import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} />
        </li>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="index.html">About</a>
        </li>
        <li>
          <a href="index.html">Menu</a>
        </li>
        <li>
          <a href="index.html">Reservations</a>
        </li>
        <li>
          <a href="index.html">Order Online</a>
        </li>
        <li>
          <a href="index.html">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
