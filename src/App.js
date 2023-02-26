import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import ProductSingle from "./pages/ProductSingle";

import { useDispatch, useSelector } from "react-redux";

import { toggleDarkMode } from "./features/themeSlice";
import MyAlbum from "./pages/MyAlbum";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice";

const albumStore = configureStore({
  reducer: {
    album: albumReducer,
  },
});

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const [themeClass, setThemeClass] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      setThemeClass("dark");
    } else {
      setThemeClass("");
    }
  }, [isDarkMode]);
  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={handleToggleDarkMode} />
      <div className={`products-container ${themeClass}`}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />

          <Route path="/myalbum" element={<MyAlbum />} />

          <Route path="/product/:id" element={<ProductSingle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
