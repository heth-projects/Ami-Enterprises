import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Login from "./Components/Login";
import Cart from "./Components/Cart/Cart.js";
import { CartProvider } from "./Context/CartContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/products" Component={Product} />
          <Route path="/login" Component={Login} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
