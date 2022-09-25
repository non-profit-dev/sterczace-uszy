module.exports = {
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  setupFilesAfterEnv: ["./jest.setup.js"],
}
