import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Grid } from "@mui/material";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API_KEY = "QWig25LIyukJPnbTBTMaJJf4suIEYM91EnuHqAtJbR2FC0pX5WKGONkD";
    const url = `https://api.pexels.com/v1/search?query=technology&per_page=9`;

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
  }, []);
  console.log(data);
  return (
    <Grid container spacing={2}>
      {data.map((photo) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            name={photo.alt}
            imageUrl={photo.src.medium}
            description={photo.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
