import "../styles/Footer.css";
import LogoFooter from "../assets/Asset 20@4x.png";
const Footer = () => {
  return (
    <footer>
      <img src={LogoFooter} />
      <div className="lnk-container">
        <div>
          <ul>
            <h3>Doormat</h3>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Contact</h3>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Social Media</h3>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
