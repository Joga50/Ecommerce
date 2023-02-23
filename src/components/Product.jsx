import React from "react";

function Product({ name, description, imageUrl }) {
  return (
    <div className="product">
      <img
        src={imageUrl}
        alt={name}
        style={{ height: "200px", width: "200px" }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Product;
