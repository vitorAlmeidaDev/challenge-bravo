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
};
