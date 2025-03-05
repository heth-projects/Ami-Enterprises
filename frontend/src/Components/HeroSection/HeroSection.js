import React from "react";
import Button from "../Button";
import "../../Assets/styles/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Discover Premium Stationery</h1>
      <p>Find the best pens, notebooks, and more for your creative needs.</p>
      <Button
        text="Shop Now"
        onClick={() => (window.location.href = "/products")}
      />
    </section>
  );
};

export default HeroSection;
