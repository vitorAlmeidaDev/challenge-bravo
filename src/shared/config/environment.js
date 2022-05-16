require("dotenv").config();

module.exports = {
  node_env: process.env.NODE_ENV || "development",
  service: {
    name: process.env.SERVICE_NAME || "CURRENCY-CONVERSION",
    port: process.env.SERVICE_PORT || "3030",
  },
  mongo: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    reconnect: process.env.DB_RECONNECT,
  },
};
