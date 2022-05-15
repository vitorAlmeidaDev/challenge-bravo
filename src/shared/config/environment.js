require("dotenv").config();

module.exports = {
  node_env: process.env.NODE_ENV || "development",
  service: {
    name: process.env.SERVICE_NAME || "CURRENCY-CONVERSION",
    port: process.env.SERVICE_PORT || "3030",
  },
};
