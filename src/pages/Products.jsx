import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the first product.",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the second product.",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the third product.",
      price: 39.99,
    },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
