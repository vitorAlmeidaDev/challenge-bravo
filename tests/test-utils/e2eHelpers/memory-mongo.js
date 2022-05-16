const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
let mongod;
/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async function start() {
  mongod = await MongoMemoryServer.create();
  const uri = await mongod.getUri(true);

  await mongoose.connect(uri);
});

/**
 * Close connection after running tests.
 */
afterAll(async () => {
  await mongoose.connection.close();
  await mongod.stop();
});
