const express = require("express");
const cors = require("cors");

const errorHandler = require("./middleware/error.middleware");

const travelRoutes = require("./features/travel/travel.routes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/travel", travelRoutes);

// health
app.get("/api/v1/health", (req, res) => {
  res.json({ success: true, message: "Server running 🚀" });
});

app.use(errorHandler);

module.exports = app;
