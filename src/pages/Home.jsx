import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("technology");

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

  const categories = ["technology", "nature", "food", "travel"];

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      {data.map((item) => (
        <img src={item.src.medium} alt={item.id} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
