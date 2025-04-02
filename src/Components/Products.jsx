import React, { useContext } from "react";
import "./Products.css";
import { Link } from "react-router";
import Shop_By_Category from "./Shop_By_Category";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataContext from "../Context/DataContext";

const Products = ({ items }) => {
  const { addtoCart } = useContext(DataContext);
  const { pathname } = useLocation();

  const handleAddCart = () => {
    toast.success("🎉 Product Added To the Cart", {
      position: "top-right",
      autoClose: 6000, // Toast disappears after 3 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <>
      {pathname === "/" ? <Shop_By_Category /> : ""}

      <div className="ProductsDisplay">
        {items.map((item) => (
          <div className="ProductDiv" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                className="productImg"
                src={item.imgSrc}
                alt="product"
                width="240px"
                height="250px"
              />
            </Link>
            <h1 style={{ color: "white" }}>{item.title}</h1>
            <h2 style={{ color: "#ff9900" }}> Price: {item.price} ₹</h2>

            <button
              onClick={() => {
                handleAddCart();
                addtoCart(item.id, item.title, item.price, item.imgSrc);
              }}
              style={{
                color: "white",
                backgroundColor: "#ff9900",
                padding: "15px 30px",
                borderRadius: "10px",
                border: "1px solid white",
                cursor: "Pointer",
                fontWeight: 600,
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

// {
//   ["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
//     <li key={category}>
//       <Link to={`/product/category/${category}`} className="nav-item">
//         {category}
//       </Link>
//     </li>
//   ));
// }
