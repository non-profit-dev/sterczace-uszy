const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    testIsolation: false,
    viewportWidth: 1600,
    viewportHeight: 1200,
  },
})
