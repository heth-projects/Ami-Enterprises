import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "../../Assets/styles/cartItem.css";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>₹{item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <button onClick={() => decreaseQuantity(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item)}>+</button>
          <button className="remove-btn" onClick={() => removeFromCart(item)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
