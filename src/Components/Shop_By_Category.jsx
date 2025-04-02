import React, { useContext, useState } from "react";
import DataContext from "../Context/DataContext";
import { items } from "../Context/Data";
import "./ShopbyCategory.css";
const categories = [
  {
    name: "All Products",
  },
  {
    name: "Mobiles",
  },
  {
    name: "Laptops",
  },
  {
    name: "Tablets",
  },
  {
    name: "Watches",
  },
];

const priceRange = ["30000", "40000", "50000", "60000", "70000", "80000"];

const Shop_By_Category = () => {
  const { setproducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(30000);

  const filterBycategory = (cat) => {
    if (cat === "All Products") {
      setproducts(items);
    } else {
      setproducts(
        items.filter((pro) => pro.category?.toLowerCase() === cat.toLowerCase())
      );
    }
  };

  // const filterByPrice = (price) => {
  //   setproducts(items.filter((product) => product.price <= price));
  // };
  const filterByPrice = (price) => {
    const priceNumber = Number(price); // Convert selected price to a number
    setproducts(items.filter((product) => Number(product.price) <= priceNumber));
  };
  

  return (
    <>
    
      <div className="FilerProducts">
        <div className="InsideProducts ">
          <h1>Filter Products</h1>
          <div className="FilerProductsName">
            {categories.map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "gray",
                  padding: "15px 18px",
                  borderRadius: "10px",
                  border: "3px solid #e68a00",
                  marginLeft: "25px",
                  fontSize: "22px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => filterBycategory(category.name)}
              >
                {category.name}
              </div>
            ))}
          </div>
          <h1>Price Range</h1>
          <div className="FilerProductsName">
            {priceRange.map((pricerange, index) => (
              <div
                key={`price-${index}`}
                style={{
                  backgroundColor: "gray",
                  padding: "15px 18px",
                  borderRadius: "10px",
                  border: "3px solid #e68a00",
                  marginLeft: "25px",
                  fontSize: "22px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => filterByPrice(pricerange)}
              >
                {pricerange}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_By_Category;
