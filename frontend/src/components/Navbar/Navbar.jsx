import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  
  // Calculate total items (sum of quantities)
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <Link to="/" className="nav-logo">Naksh Jewels</Link>
        <div className="nav-links">
          <Link to="/">Products</Link>
          <Link to="/cart" className="nav-cart">
            Cart <span className="cart-badge">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;