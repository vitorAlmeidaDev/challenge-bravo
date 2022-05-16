const currencyModel = require("../../modules/currency/database/schema");
const currenciesToAdd = require("./currency.json");

async function seed() {
  for await (let currency of currenciesToAdd) {
    await currencyModel.create(currency);
  }
}
module.exports = seed;
