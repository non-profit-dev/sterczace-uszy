module.exports = {
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svg.js",
  },
}
