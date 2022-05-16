const currencyModel = require("../../modules/currency/database/schema");
const currenciesToAdd = require("./currency.json");
const { updateCurrencies } = require("../../jobs/currenciesJob");

async function seed() {
  for await (let currency of currenciesToAdd) {
    await currencyModel.create(currency);
  }
  await updateCurrencies();
}
module.exports = seed;
