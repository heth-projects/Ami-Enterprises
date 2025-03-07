import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";
import "../../Assets/styles/cart.css";

const Cart = () => {
  const { cartItems, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Grand Total: ₹{getTotalPrice().toFixed(2)}</h2>
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={clearCart}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
