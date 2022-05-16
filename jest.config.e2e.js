/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  coverageProvider: "v8",
  testMatch: ["**/tests/**/*.test.js"],
  collectCoverageFrom: [
    "<rootDir>/src/**",
    "!<rootDir>/src/shared/**",
    "!<rootDir>/src/jobs/**",
    "!<rootDir>/src/integrations/**",
    "!<rootDir>/tests",
  ],
  setupFilesAfterEnv: [
    "./tests/test-utils/e2eHelpers/jest.setup.redis-mock.js",
    "./tests/test-utils/e2eHelpers/helper.js",
  ],
};
