const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const foodRoutes = require("../routes/foodRoutes"); // ✅ Correct path
const cors = require("cors");
app.use(cors());


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Mount API
app.use("/api/foods", foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
