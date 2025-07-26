const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// Add Restaurant
router.post("/", async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.json(restaurant);
});

// Get All Restaurants
router.get("/", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

module.exports = router;
