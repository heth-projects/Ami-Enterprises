import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection.js";
import CategorySection from "../Components/CategoryHome/HomePageCategory.js";
import ProductCard from "../Components/ProductCard/ProductCardHome.js";
import Footer from "../Components/Footer/Footer.js";
import "../Assets/styles/homePage.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <section className="featured-products-home">
        <h2 className="section-title-home">Featured Stationery</h2>
        <div className="product-list-home">
          <ProductCard
            image="assets/pen.jpg"
            title="Luxury Fountain Pen"
            price="₹12.99"
          />
          <ProductCard
            image="assets/notebook.jpg"
            title="Hardcover Notebook"
            price="₹8.99"
          />
          <ProductCard
            image="assets/sketchbook.jpg"
            title="Artist Sketchbook"
            price="₹15.49"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
