const mongoose = require("mongoose");
const { node_env, mongo } = require("./environment");
const seed = require("../../../seed");

const mongoUri = `mongodb://${mongo.user}:${mongo.pass}@db:${mongo.port}/${mongo.dbName}?authSource=admin`;
const mongoReconnect = mongo.reconnect;

// Create the database connection
mongoose.connect(mongoUri);

mongoose.connection.on("connected", async () => {
  console.log({ MONGO_URI: mongoUri }, "DATABASE CONNECTED");
  if (node_env === "development") {
    mongoose.connection.db.dropDatabase();
    await seed();
  }

  mongoose.connection.emit("ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err, "Mongo Error");

  if (
    err.message &&
    err.message.match(/failed to connect to server .* on first connect/)
  ) {
    setTimeout(() => {
      mongoose.connect(mongoUri).catch(() => {});
    }, mongoReconnect);
  }
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB lost connection");

  setTimeout(function () {
    mongoose.connect(mongoUri).catch(() => {});
  }, mongoReconnect);
});
