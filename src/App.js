import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Cart from "./pages/Cart";
import ProductSingle from "./pages/ProductSingle";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductSingle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
