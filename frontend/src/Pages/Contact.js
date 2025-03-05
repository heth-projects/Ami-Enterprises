import React from "react";
import "../Assets/styles/contact.css"; // Import CSS file
import Footer from "../Components/Footer/Footer.js"; // Import Footer component

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="contact-description">
            Have questions or need assistance? Feel free to reach out to us!
          </p>

          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter subject" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Write your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123 Stationery Street, Mumbai, India</p>
            </div>
            <div className="info-card">
              <h3>📧 Email</h3>
              <p>support@ami-enterprises.com</p>
            </div>
            <div className="info-card">
              <h3>
                <i class="fab fa-whatsapp"></i> Phone
              </h3>
              <p>+91 98192 87411</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <h3>Follow Us</h3>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
