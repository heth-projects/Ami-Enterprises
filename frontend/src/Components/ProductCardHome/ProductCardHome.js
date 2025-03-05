import React from "react";
import "../../Assets/styles/productCardHome.css";

const ProductCardHome = ({ image, title, price }) => {
  return (
    <div className="product-card-home">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCardHome;
