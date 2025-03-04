import React from "react";
import "../../Assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../Assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the left side */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo}/>
        </Link>
      </div>

      {/* Navigation links in the center */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Login button and cart icon on the right */}
      <div className="navbar-actions">
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
