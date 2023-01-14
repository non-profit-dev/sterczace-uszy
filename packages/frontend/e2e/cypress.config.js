const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
  },
});
