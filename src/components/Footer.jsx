import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>About ShopHub</h3>
          <p>Your one-stop destination for quality products.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>All Products</p>
          <p>Add Product</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@shophub.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShopHub. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
