import React, { useState, useEffect } from "react";
import productsData from "../Utils/productData";
import Filter from "../Utils/filter";
import ProductCard from "../Components/ProductCardHome/ProductCard";
import "../Assets/styles/product.css";
import Footer from "../Components/Footer/Footer";

const Product = () => {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: "",
    price: 1000,
    rating: "",
    color: [],
    company: [],
  });

  useEffect(() => {
    const filteredProducts = productsData.filter((product) => {
      return (
        (filters.category ? product.category === filters.category : true) &&
        product.price <= filters.price &&
        (filters.rating ? product.rating >= filters.rating : true) &&
        (filters.color.length ? filters.color.includes(product.color) : true) &&
        (filters.company.length
          ? filters.company.includes(product.company)
          : true)
      );
    });
    setProducts(filteredProducts);
  }, [filters]);

  return (
    <>
      <div className="product-page">
        <div className="filter-section">
          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
