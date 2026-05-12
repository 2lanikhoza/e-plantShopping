import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./App.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">Cart</a>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Cost: ${item.price * item.quantity}</p>

            <button onClick={() => increaseQuantity(item)}>+</button>
            <button onClick={() => decreaseQuantity(item)}>-</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))
      )}

      <button onClick={() => (window.location.href = "#plants")}>
        Continue Shopping
      </button>

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartItem;
