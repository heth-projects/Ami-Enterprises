import React from "react";
import "../../Assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Stationery Store. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
