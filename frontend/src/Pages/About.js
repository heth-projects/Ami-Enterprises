import React from "react";
import "../Assets/styles/about.css"; // Import the CSS file
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <h1>About Us</h1>
          <p className="about-description">
            Welcome to <strong>Ami Enterprises</strong>, your ultimate
            destination for high-quality stationery. Whether you are a student,
            artist, or working professional, we provide a wide range of products
            designed to fuel creativity and efficiency.
          </p>

          {/* About Highlights Section */}
          <div className="about-highlights">
            <div className="highlight-card">
              <img src="/images/quality.png" alt="Quality" />
              <h3>Premium Quality</h3>
              <p>We ensure top-notch materials and long-lasting products.</p>
            </div>
            <div className="highlight-card">
              <img src="/images/affordable.png" alt="Affordable" />
              <h3>Affordable Pricing</h3>
              <p>Get the best stationery without breaking the bank.</p>
            </div>
            <div className="highlight-card">
              <img src="/images/variety.png" alt="Variety" />
              <h3>Wide Variety</h3>
              <p>From notebooks to office essentials, we have it all.</p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="about-features">
            <div className="feature-card">
              <h3>Trusted by Thousands</h3>
              <p>We have a strong community of happy customers.</p>
            </div>
            <div className="feature-card">
              <h3>Fast & Reliable Delivery</h3>
              <p>
                We ensure quick shipping for a seamless shopping experience.
              </p>
            </div>
            <div className="feature-card">
              <h3>Customer Satisfaction</h3>
              <p>Your happiness is our priority. We offer 24/7 support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component*/}
      <Footer />
    </>
  );
};

export default About;
