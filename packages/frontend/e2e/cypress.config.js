const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    testIsolation: false,
    viewportWidth: 1440,
    viewportHeight: 920,
    scrollBehavior: false,
  },
})
