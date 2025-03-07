import React, { useState, useEffect } from "react";
import productsData from "../Utils/productData";
import Filter from "../Utils/filter";
import ProductCard from "../Components/ProductCard/ProductCard";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let filteredProducts = productsData.filter((product) => {
      return (
        (filters.category ? product.category === filters.category : true) &&
        product.price <= filters.price &&
        (filters.rating ? product.rating >= filters.rating : true) &&
        (filters.color.length ? filters.color.includes(product.color) : true) &&
        (filters.company.length
          ? filters.company.includes(product.company)
          : true) &&
        (searchTerm
          ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
          : true)
      );
    });

    if (sortOption === "price-asc") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortOption === "name-desc") {
      filteredProducts = filteredProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    setProducts(filteredProducts);
  }, [filters, searchTerm, sortOption]);

  return (
    <>
      <div className="product-page">
        <div className="search-sort-section">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <i className="fas fa-search serach-icon-products"></i>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-options"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
        <div className="content-section">
          <div className="filter-section">
            <Filter filters={filters} setFilters={setFilters} />
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
