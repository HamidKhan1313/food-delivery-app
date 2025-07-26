const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  image: String,
  foods: [
    {
      name: String,
      price: Number,
      description: String,
      image: String,
    },
  ]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
