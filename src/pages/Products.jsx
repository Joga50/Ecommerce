import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import ProductSingle from "./ProductSingle";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Products() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("technology");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const API_KEY = "QWig25LIyukJPnbTBTMaJJf4suIEYM91EnuHqAtJbR2FC0pX5WKGONkD";
    const url = `https://api.pexels.com/v1/search?query=${category}&per_page=90`;
    axios
      .get(url, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((res) => {
        setData(res.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const categories = [
    "technology",
    "nature",
    "food",
    "travel",
    "ocean",
    "Tigers",
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <div
        className="pagination"
        key={number}
        id={number}
        onClick={(e) => setCurrentPage(Number(e.target.id))}
        style={{
          color: "blue",
          textDecoration: "underline",
          display: "flex",
          flexDirection: "row",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        {number}
      </div>
    );
  });

  // manejador de eventos onClick para cada producto
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // si se ha seleccionado un producto, muestra la página individual
  if (selectedProduct) {
    return <ProductSingle product={selectedProduct} />;
  }

  return (
    <div className="products-container">
      <FormControl sx={{ m: 1, minWidth: 120, marginTop: "60px" }}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="nature">Nature</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="travel">Travel</MenuItem>
          <MenuItem value="ocean">Ocean</MenuItem>
          <MenuItem value="Tigers">Tigers</MenuItem>
        </Select>
      </FormControl>
      <div className="products-grid">
        {currentProducts.map((photo) => (
          <Link
            to={`/product/${photo.id}`}
            key={photo.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Product
              key={photo.id}
              name={photo.alt}
              imageUrl={photo.src.medium}
              description={photo.photographer}
              onClick={() => handleProductClick(photo)} // pasamos el manejador de eventos como props al componente Product
            />
          </Link>
        ))}
      </div>
      <ul
        id="page-numbers"
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "18px",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default Products;
