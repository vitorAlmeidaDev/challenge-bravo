const { promisify } = require("util");

const redis = require("../config/redis");
const { redisConfig } = require("../config/environment");

const getAsync = promisify(redis.get).bind(redis);
const setAsync = promisify(redis.set).bind(redis);
const deleteAsync = promisify(redis.del).bind(redis);

const get = async (key) => getAsync(key);

const set = async (key, value, expireTime = redisConfig.ttl) => {
  try {
    return await setAsync(key, value, "EX", expireTime);
  } catch (err) {
    console.log({ redis: { error: err } }, "redis SET cache failed");

    return true;
  }
};
const del = async (key) => deleteAsync(key);

module.exports = {
  get,
  set,
  del,
};
