// backend/server.js 

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Our product data, based on your image
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 45 }
];

// Define the API endpoint
app.get('/api/products', (req, res) => {
  console.log('GET /api/products request received');
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});