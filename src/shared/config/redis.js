const redis = require("redis");

const { redisConfig } = require("../config/environment");
const client = redis.createClient({
  host: "redis",
  port: 6379,
});

client.on("connect", () => {
  console.log("connecting with redis");
});

client.on("ready", () => {
  console.log("connection stablished with redis");
});

client.on("error", (err) => {
  console.log(err, "redis connection failed");
});

client.on("end", (err) => {
  console.log(err, "redis connection down");
});

client.isConnected = async () => {
  return await client.set("health", "ok");
};

module.exports = client;
