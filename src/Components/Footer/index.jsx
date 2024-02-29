import logoMark from "../../assets/images/Logomark.png";
import facebookLogo from "../../assets/images/Facebook Icon.png";
import instagramLogo from "../../assets/images/Instagram Icon.png";
import twitterLogo from "../../assets/images/Twitter Icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // Template
  return (
    <footer aria-label="Footer">
      <div className="left">
        <img src={logoMark} alt="Logo Mark" />
        <Link to="/privacy-policy" aria-label="Privacy Policy Link">
          Privacy Policy
        </Link>
        <div className="contacts">
          <span>
            <a href="tel:+36301234567" aria-label="Phone Number">
              +36 30 123 4567
            </a>
          </span>
          <span>
            <a href="mailto:support@dineease.com" aria-label="Email Address">
              support@dineease.com
            </a>
          </span>
        </div>
        <span className="copy" aria-label="Copyright">
          &copy; 2024 - All rights reserved
        </span>
      </div>
      <div className="right">
        <h3>Follow Us</h3>
        <div className="social-media-icons">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="nofollow"
            itemProp="url"
            aria-label="Facebook Link"
          >
            <img src={facebookLogo} alt="Facebook Logo" />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="nofollow"
            itemProp="url"
            aria-label="Instagram Link"
          >
            <img src={instagramLogo} alt="Instagram Logo" />
          </Link>
          <Link
            to="https://x.com"
            target="_blank"
            rel="nofollow"
            itemProp="url"
            aria-label="Twitter Link"
          >
            <img src={twitterLogo} alt="Twitter Logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
