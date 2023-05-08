import React from "react";
import "./css/Footer.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkdn from "./images/linkdn.png";
import twitter from "./images/twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-top">
        <div className="grid">
          <div className="grid-item-left">
            <ul>
              <li>
                <a href="#/">About Us</a>
              </li>
              <li>
                <a href="#/">Contact Us</a>
              </li>
              <li>
                <a href="#/">Sign in</a>
              </li>
              <li>
                <a href="#/">Privacy Notice</a>
              </li>
              <li>
                <a href="#/">Terms of Service</a>
              </li>
              <li>
                <a href="#/">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="grid-item-right">
            <h2 className="footer-heading">Stay connected</h2>
            <ul className="footer-social-link">
              <li>
                <a href="#/">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#/">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="#/">
                  <img src={linkdn} alt="" />
                </a>
              </li>
              <li>
                <a href="#/">
                  <img src={twitter} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-content-bottom">
        <div className="footer-info">
          <small>
            © 2023, <a href="/"> Shopify </a>
            copyright & terms of policy.
          </small>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
