const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// VERY IMPORTANT: This allows your Frontend (Port 3000) to talk to this Backend (Port 5000)
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Naksh Gold Bangle", price: 450, image: "https://placehold.co/300x300?text=Gold+Bangle" },
  { id: 2, name: "Diamond Stud Earrings", price: 800, image: "https://placehold.co/300x300?text=Earrings" },
  { id: 3, name: "Sapphire Pendant", price: 1200, image: "https://placehold.co/300x300?text=Pendant" }
];

// GET /api/products
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

// POST /api/cart (Validation middleware check)
app.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity || quantity <= 0) {
    return res.status(400).json({ message: "Invalid product data" });
  }
  res.status(201).json({ message: "Item added to cart successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));