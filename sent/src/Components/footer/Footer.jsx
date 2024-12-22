import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo">
          <img src="./assets/logo.png" alt="Osumare Logo" />
        </div>
        <div className="text">
          The best digital marketing agency in Pune with a proven track record
          of consistently delivering quality service.
        </div>
        <div className="address">
          <h3>Address</h3>
          <ul>
            <li>Survey No. 43, Pathare</li>
            <li>Thube Nagar, Nagar</li>
            <li>Road, Kharadi, Pune-14,</li>
            <li>Maharastra, India.</li>
          </ul>
        </div>
        <div className="contacts">
          <h3>Contacts</h3>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> hello@osumare.in
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i> +91 8459 8762 26
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-right">
        <div className="menu">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>  
            <li>Services</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="social">
          <h3>Social</h3>
          <ul className="social-icons">
            <div className="icon-row">
              <li>
                <i className="bi bi-whatsapp"></i>
              </li>
              <li>
                <i className="bi bi-twitter"></i>
              </li>
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-youtube"></i>
              </li>
            </div>
            <div className="icon-row">
              <li>
                <i className="bi bi-instagram"></i>
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
