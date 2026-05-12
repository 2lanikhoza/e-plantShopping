import React, { useState } from "react";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app">
      {!showProductList ? (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>
              Welcome to Paradise Nursery, your online destination for beautiful
              houseplants. Browse our collection of aromatic, medicinal,
              decorative, and air-purifying plants for your home and office.
            </p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </section>
      ) : (
        <section className="products-page">
          <nav className="navbar">
            <h2>Paradise Nursery</h2>
            <div>
              <a href="#home">Home</a>
              <a href="#plants">Plants</a>
              <a href="#cart">Cart</a>
            </div>
          </nav>

          <div className="products-intro">
            <h1>Plant Products</h1>
            <p>
              Select your favourite plants and add them to your shopping cart.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
