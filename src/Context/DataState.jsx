import React from "react";
import DataContext from "./DataContext";
import { useState } from "react";
import { items } from "./Data";
// import { title } from "process";

const DataState = (props) => {
  const [cart, setcart] = useState([]);
  const [products, setproducts] = useState(items);

  const removeFromCart = (id) => {
    setcart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const addtoCart = (id, title, price, image) => {
    const obj = {
      id,
      title,
      price,
      image,
    };
    setcart([...cart, obj]);
    console.log(cart);
  };
  return (
    <DataContext.Provider value={{ cart, setcart, products, setproducts,addtoCart,removeFromCart }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
