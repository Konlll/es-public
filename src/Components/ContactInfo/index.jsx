import phone from "../../assets/images/phone.svg";
import location from "../../assets/images/location-filled.svg";
import email from "../../assets/images/email.svg";
import facebookLogo from "../../assets/images/Facebook Icon.png";
import instagramLogo from "../../assets/images/Instagram Icon.png";
import twitterLogo from "../../assets/images/Twitter Icon.png";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  // Template
  return (
    <section
      className="contact-information"
      role="region"
      aria-labelledby="contact-info-heading"
    >
      <div className="title">
        <h2 id="contact-info-heading">Contact Information</h2>
        <p>Have an inquiry? Fill out the form to contact our team.</p>
      </div>

      <div className="contact-data">
        <div className="row" role="listitem">
          <img src={phone} alt="Phone" />
          <span aria-label="Phone Number">+36 30 123 4567</span>
        </div>
        <div className="row" role="listitem">
          <img src={email} alt="Email" />
          <span aria-label="Email Address">support@dineease.com</span>
        </div>
        <div className="row" role="listitem">
          <img src={location} alt="Location" />
          <span aria-label="Address">
            132 Dartmouth Street Boston,
            <br />
            Massachusets 02156 United States
          </span>
        </div>
      </div>

      <div className="social-media" role="list">
        <Link
          to="https://facebook.com"
          target="_blank"
          rel="nofollow"
          itemProp="url"
          role="listitem"
          aria-label="Facebook"
        >
          <img src={facebookLogo} alt="Facebook Logo" />
        </Link>
        <Link
          to="https://instagram.com"
          target="_blank"
          rel="nofollow"
          itemProp="url"
          role="listitem"
          aria-label="Instagram"
        >
          <img src={instagramLogo} alt="Instagram Logo" />
        </Link>
        <Link
          to="https://x.com"
          target="_blank"
          rel="nofollow"
          itemProp="url"
          role="listitem"
          aria-label="Twitter"
        >
          <img src={twitterLogo} alt="Twitter Logo" />
        </Link>
      </div>

      <div
        className="circle smaller"
        role="presentation"
        aria-hidden="true"
      ></div>
      <div
        className="circle bigger"
        role="presentation"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default ContactInfo;
