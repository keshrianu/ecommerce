import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All_Products from "./Components/All_Products";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Shop_By_Category from "./Components/Shop_By_Category";
import Cart from "./Pages/Cart";
import Product_By_Category from "./Pages/Product_By_Category";
import Product_Details from "./Pages/Product_Details";
import SearchProduct from "./Pages/SearchProduct";
import { ToastContainer } from "react-toastify";
import "./index.css";
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route path="/" element={<All_Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product_Details />} />
        <Route
          path="/product/category/:cat"
          element={<Product_By_Category />}
        />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        {/* <h1>Hello</h1> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
