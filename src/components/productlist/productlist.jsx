import React from 'react';
import { useCart } from '../context/cartcontext';

const ProductList = () => {
  const { addItemToCart } = useCart();

  const products = [
    { id: 1, title: 'women 1', price: 29.99 },
    { id: 2, title: 'Product 2', price: 19.99 },
  ];

  const handleAddToCart = (product) => {
    addItemToCart({ ...product, quantity: 1 });
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
