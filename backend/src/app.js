const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const setupSwagger = require("./docs/swagger");

const errorHandler = require("./middleware/error.middleware");

const travelRoutes = require("./features/travel/travel.routes");
const searchRoutes = require("./features/search/search.routes");

const app = express();

app.use(
  cors({
    origin: env.baseURI,
  }),
);
app.use(express.json());

// routes
app.use("/api/v1/travel", travelRoutes);
app.use("/api/v1/search", searchRoutes);

setupSwagger(app);

// health
app.get("/api/v1/health", (req, res) => {
  res.json({ success: true, message: "Server running 🚀" });
});

app.use(errorHandler);

module.exports = app;
