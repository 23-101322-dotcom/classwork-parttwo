import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          🛒 <span>ShopHub</span>
        </div>

        <nav className="nav-links">
          <a href="#">Products</a>
          <a href="#">Add Product</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
