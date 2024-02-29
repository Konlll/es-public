import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import menuIcon from "../../assets/images/Menu Iconvector.svg";
import { useState } from "react";

const Header = () => {
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  return (
    <header role="menu">
      {/* Main Menu */}
      <img src={logo} alt="Logo" aria-label="Website Logo" />
      <nav className="main-menu" aria-hidden={isHamburgerMenu}>
        <Link to="/" aria-label="Home Page">
          Home
        </Link>
        <Link to="/about" aria-label="About Us Page">
          About us
        </Link>
        <Link to="/contact" aria-label="Contact Page">
          Contact
        </Link>
        <img
          src={menuIcon}
          alt="MenuIcon"
          onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}
          aria-label="Toggle Hamburger Menu"
        />
      </nav>
      {/* Hambuerger Menu */}
      <nav
        className={`hamburger-menu ${!isHamburgerMenu && "hidden"}`}
        aria-hidden={!isHamburgerMenu}
      >
        <span
          onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}
          aria-label="Close Hamburger Menu"
        >
          ×
        </span>
        <Link to="/" aria-label="Home Page">
          Home
        </Link>
        <Link to="/about" aria-label="About Us Page">
          About us
        </Link>
        <Link to="/contact" aria-label="Contact Page">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
