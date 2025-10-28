
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // We will create this file next

function App() {
  // State for products, loading, and error
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    // Define the async function to fetch data
    const fetchProducts = async () => {
      try {
        // Make the GET request using axios
        // Note: We use the full URL to our backend
        const response = await axios.get('http://localhost:5000/api/products');
        
        // On success, update the products state
        setProducts(response.data);
      } catch (err) {
        // On error, update the error state
        setError(err.message);
      } finally {
        // In either case, stop loading
        setLoading(false);
      }
    };

    // Call the function
    fetchProducts();
  }, []); // The empty array [] means this effect runs only once on mount

  // --- Render Logic ---

  // 1. Handle Loading State
  if (loading) {
    return <div className="App"><h1>Loading...</h1></div>;
  }

  // 2. Handle Error State
  if (error) {
    return <div className="App"><h1>Error: {error}</h1></div>;
  }

  // 3. Handle Success State (Render Products)
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
