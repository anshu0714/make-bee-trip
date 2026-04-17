const app = require("./app");
const connectDB = require("./config/db");
const env = require("./config/env");
const { logInfo } = require("./utils/logger");

async function start() {
  await connectDB(env.mongoURI);

  app.listen(env.port, () => {
    logInfo(`Server running on port ${env.port}`);
  });
}

start();
