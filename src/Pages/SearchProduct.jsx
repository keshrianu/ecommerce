import React from "react";
import { useParams } from "react-router";
import { items } from "../Context/Data";
import Products from "../Components/Products";

const SearchProduct = () => {
  const { term } = useParams();

  const searchProduct = items.filter((pro) =>
    pro.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div>
      {searchProduct.length > 0 ? (
        <Products items={searchProduct} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "10px",
              border: "2px solid red",
              display: "inline-block",
              borderRadius: "5px",
              backgroundColor: "#ffcccc",
            }}
          >
            ⚠️ No products found for "{term}"!
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
