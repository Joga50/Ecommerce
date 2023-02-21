import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const API_KEY = "QWig25LIyukJPnbTBTMaJJf4suIEYM91EnuHqAtJbR2FC0pX5WKGONkD";
    const url = `https://api.pexels.com/v1/photos/${id}`;

    axios
      .get(url, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <h1>{product.alt}</h1>
      <img src={product.src.medium} alt={product.alt} />
      <p>{product.photographer}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductSingle;
