import React from "react";
import { useParams } from "react-router";
import { items } from "../Context/Data";
import "./ProductDetails.css";
import Products from "../Components/Products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product_Details = () => {
  const { id } = useParams();
  const product = items.find((pro) => pro.id === Number(id));
  // console.log(product);
  const relatedProducts = items.filter(
    (pro) => pro.category.toLowerCase() === product.category
  );

  const handleBuyNow = () => {
    toast.success("🎉 Product Will Dispatch Shortly!", {
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
      <div className="productDetails">
        <div>
          <img
            src={product.imgSrc}
            alt={product.title}
            width="600"
            height="500"
          />
        </div>

        <div className="productInfo">
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            {/* <strong>Name:</strong>  */}
            {product.title.toUpperCase()}
          </p>

          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            <strong>Category:</strong> {product.category.toUpperCase()}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>

          <button
            onClick={handleBuyNow}
            style={{
              color: "white",
              backgroundColor: "#ff9900",
              padding: "15px 30px",
              borderRadius: "10px",
              border: "1px solid white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <h1 style={{ textAlign: "center", fontSize: "50px", color: "white" }}>
        : Related Products :
      </h1>
      <Products items={relatedProducts} />
    </>
  );
};

export default Product_Details;

{
  /* <h1>{product.title}</h1>
<img src={product.imgSrc} alt={product.title} width="300" />
<p>Category: {product.category}</p>
<p>Description: {product.description}</p>
<p>Price: ₹{product.price}</p>
<a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
  Buy on Amazon
</a> */
}
