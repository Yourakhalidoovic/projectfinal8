import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>
          <div action="#">
            <input
              className="inputnews"
              type="text"
              placeholder="Your email"
              required
            />
            <button className="btnnews" type="submit">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Azouza Technologie
        </a>
      </div>
    </div>
  );
};

export default Footer;
