import React, { useState } from "react";
import "../../Assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Importing hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h1>
          <Link to="/">Ami Enterprises</Link>
        </h1>
      </div>

      {/* Hamburger Menu (for mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Actions: Login & Cart */}
      <div className="navbar-actions">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
