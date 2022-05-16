const router = require("express").Router();
const mongoose = require("mongoose");
const redis = require("../config/redis");

router.get("/", async (req, res) => {
  const stateMongo = mongoose.connection.readyState === 1;
  const stateRedis = await redis.isConnected();
  const allStates = stateMongo && stateRedis;

  const info = {
    date_time: new Date(),
    db_connection: `MONGODB: ${stateMongo ? "ON" : "OFF"} | REDIS: ${
      stateRedis ? "ON" : "OFF"
    }`,
  };

  res.status(allStates ? 200 : 500).send(info);
});

module.exports = router;
