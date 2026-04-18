const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

// Load YAML file
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

// Setup function
const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,
      customSiteTitle: "Make Bee Trip API Docs",
    }),
  );
};

module.exports = setupSwagger;
