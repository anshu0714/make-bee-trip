const { logInfo, logError } = require("../utils/logger");
const mongoose = require("mongoose");

async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    logInfo("MongoDB Connected");
  } catch (err) {
    logError(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;