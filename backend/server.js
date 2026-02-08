const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Environment variables [cite: 29]

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Naksh Gold Bangle", price: 450, image: "https://placehold.co/300x300?text=Gold+Bangle" },
  { id: 2, name: "Diamond Stud Earrings", price: 800, image: "https://placehold.co/300x300?text=Earrings" },
  { id: 3, name: "Sapphire Pendant", price: 1200, image: "https://placehold.co/300x300?text=Pendant" }
];
// GET products endpoint
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.post('/api/cart', require('./middleware/validate').validateCartInput, (req, res) => {
  res.status(201).json({ message: "Item added to server-side cart session" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));