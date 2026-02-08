import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    // Replace with your backend URL once the server is running
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Premium Jewelry Collection</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAdd={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;