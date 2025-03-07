import React, { useContext } from "react";
import "../../Assets/styles/product.css";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        {/* <p>{product.description}</p> */}
        <p className="price">₹{product.price}</p>
        <div className="buttons">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
