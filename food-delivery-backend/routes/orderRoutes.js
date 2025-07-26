const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Place Order
router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// User Orders
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ user: req.params.userId });
  res.json(orders);
});

module.exports = router;
