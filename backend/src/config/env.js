require("dotenv").config();

const env = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || "",
  baseURI: process.env.BASE_URI || "http://localhost:5000",
};

module.exports = env;