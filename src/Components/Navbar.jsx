import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaApple } from "react-icons/fa";
import DataContext from "../Context/DataContext";

const Navbar = () => {
  const [searchterm, setsearchterm] = useState("");
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchterm}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Left Section - Logo */}
        <div className="left-nav">
          <Link to={"/"}>
            <h1 className="logo">
              <FaApple />
              <p style={{ color: "white", textDecoration: "none" }}>Apple</p>
            </h1>
          </Link>
        </div>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchterm}
            onChange={(e) => setsearchterm(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </form>

        {/* Right Section - Links & Cart */}
        <div className="right-nav">
          <ul className="nav-links">
            {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
              <li key={category}>
                <Link to={`/product/category/${category}`} className="nav-item">
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          <Link to={"/cart"} className="cart-icon">
            <FaShoppingCart aria-label="Shopping Cart" />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
