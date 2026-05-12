import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plantsArray = [
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Mint",
    category: "Aromatic Plants",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8c02f76?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Chamomile",
    category: "Medicinal Plants",
    price: 9,
    image:
      "https://images.unsplash.com/photo-1590053892247-9e1d9a7f88d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b91?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [...new Set(plantsArray.map((plant) => plant.category))];

  return (
    <div className="products-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">Cart 🛒 {cartCount}</a>
        </div>
      </nav>

      <h1 id="plants">Our Houseplants</h1>

      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="product-grid">
            {plantsArray
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>Price: ${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
