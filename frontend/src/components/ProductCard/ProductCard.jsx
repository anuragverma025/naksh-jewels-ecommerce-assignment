import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;