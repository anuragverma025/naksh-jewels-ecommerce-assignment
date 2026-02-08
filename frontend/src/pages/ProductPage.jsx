import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  // Fallback data ensures cards show up even if the API fails
  const fallbackProducts = [
    { id: 1, name: "Naksh Gold Bangle", price: 450, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80" },
    { id: 2, name: "Diamond Stud Earrings", price: 800, image: "https://images.unsplash.com/photo-1635767791020-221da315dfbc?w=500&q=80" },
    { id: 3, name: "Sapphire Pendant", price: 1200, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80" }
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setProducts(data))
      .catch((error) => {
        console.error("Backend fetch failed, using fallback data:", error);
        setProducts(fallbackProducts); // Show cards anyway!
      });
  }, []);

  return (
    <div className="container">
      <h1>Premium Jewelry Collection</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAdd={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            />
          ))
        ) : (
          <p>Loading collection...</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;