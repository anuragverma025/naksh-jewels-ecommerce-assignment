import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="container empty-cart">
        <h2>Your Jewelry Bag is Empty</h2>
        <p>Browse our collection to add premium pieces.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="page-title">Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="price">${item.price}</p>
                <div className="qty-actions">
                  <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, qty: Math.max(1, item.qty - 1) })}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, qty: item.qty + 1 })}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;