module.exports = {
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./jest-setup.js"],
}
