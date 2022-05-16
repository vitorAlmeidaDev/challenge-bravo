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
  redisConfig: {
    host: process.env.DB_REDIS_HOST || "redis",
    port: Number(process.env.DB_REDIS_PORT) || 6379,
    ttl: Number(process.env.DB_REDIS_TTL) || 7200,
  },
  externalapi: {
    url: process.env.EXTERNAL_API_URL,
  },
  currencyCron: {
    cronExpression: process.env.CURRENCY_CRON_EXPRESSION || "1 * * * * *",
  },
};
