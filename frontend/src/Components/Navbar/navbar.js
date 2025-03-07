import React, { useState, useContext } from "react";
import "../../Assets/styles/navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartCount } = useContext(CartContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to="/">Ami Enterprises</Link>
        </h1>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>
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
      <div className="navbar-actions">
        <input
          type="text"
          className={`search-bar ${menuOpen ? "show" : ""}`}
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count-navbar">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
