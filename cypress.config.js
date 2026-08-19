const { defineConfig } = require("cypress");
require("dotenv").config();

const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "report",
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,

    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },

    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
  },
});