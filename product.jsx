
import React from 'react';

const Products = () => {
  const products = [
    { name: 'iPhone 14', price: 999 },
    { name: 'Nike Shoes', price: 120 },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Products</h2>
      {products.map((product, index) => (
        <div key={index} className="card card-body mb-2">
          <h5>{product.name}</h5>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};
