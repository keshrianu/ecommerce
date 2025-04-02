import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import { Link } from "react-router";
import "./Cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart } = useContext(DataContext);

  const handleAddCart = (id) => {
    removeFromCart(id);
    toast.success("🎉 Your Order Has Been Completed", {
      position: "bottom-right",
      autoClose: 6000, // Toast disappears after 3 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };
  console.log(cart);
  return (
    <div>
      {cart.length == 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            // height: "100vh", // Full viewport height
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Your Cart Is Empty</h1>
          <Link
            to="/"
            style={{
              backgroundColor: "yellow",
              padding: "15px 30px",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((items) => (
            <div className="CartItems">
              <div key={items.id} className="insidecart">
                {/* Displaying Product Image */}
                <div>
                  <img
                    src={items.image}
                    alt={items.title}
                    width="250"
                    height="250"
                  />
                </div>

                {/* You can add more details here */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "coulmn",
                    gap: "30px",
                  }}
                >
                  <p style={{ fontSize: "30px", color: "white" }}>
                    {items.title}
                  </p>
                  <p style={{ fontSize: "30px", color: "white" }}>
                    ₹{items.price}
                  </p>
                  <button
                    onClick={() => handleAddCart(items.id)}
                    style={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "orange",
                      border: "2px solid white",
                      borderRadius: "5px",
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
