import React from "react";
import "./css/Header.css";
import cart from "./images/cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const state = useSelector((state) => state.cart);
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-icon">
          <Link href="/" className="icon">
            Shopify
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/product">Men</Link>
            </li>
            <li>
              <Link to="/product">Women</Link>
            </li>
            <li>
              <Link to="/product">Jewelry</Link>
            </li>
            <li>
              <Link to="/product">Electronics</Link>
            </li>
          </ul>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src={cart} alt="" />
            {state.length > 0 && (
              <span className="item-length">{state.length}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
