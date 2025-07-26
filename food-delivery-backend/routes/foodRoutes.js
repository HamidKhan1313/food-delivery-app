// routes/foodRoutes.js
const express = require("express");
const router = express.Router();

// Sample food data
const foods = [
  { id: 1, name: "Burger", price: 250 },
  { id: 2, name: "Pizza", price: 500 },
  { id: 3, name: "Biryani", price: 300 },
];

// GET /api/foods
router.get("/", (req, res) => {
  res.json(foods);
});

module.exports = router;

