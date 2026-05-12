import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const goToHome = () => setCurrentPage("home");
  const goToProducts = () => setCurrentPage("products");
  const goToCart = () => setCurrentPage("cart");

  return (
    <div>
      {currentPage === "home" && (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>
              Welcome to Paradise Nursery, your online destination for beautiful
              houseplants. Discover aromatic, medicinal, decorative, and
              air-purifying plants to bring freshness and natural beauty into
              your home.
            </p>
            <button className="get-started-btn" onClick={goToProducts}>
              Get Started
            </button>
          </div>
        </section>
      )}

      {currentPage !== "home" && (
        <nav className="navbar">
          <h2>Paradise Nursery</h2>
          <div>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToProducts}>Plants</button>
            <button onClick={goToCart}>Cart</button>
          </div>
        </nav>
      )}

      {currentPage === "products" && (
        <main className="products-page">
          <h1>Plant Products</h1>
          <p>
            Browse our plant collection and add your favourite houseplants to
            your cart.
          </p>
        </main>
      )}

      {currentPage === "cart" && (
        <main className="cart-page">
          <h1>Shopping Cart</h1>
          <p>Your selected plants will appear here.</p>
        </main>
      )}
    </div>
  );
}

export default App;
