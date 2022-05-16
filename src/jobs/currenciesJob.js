const CurrencyRepository = require("../modules/currency/database/repository");
const redis = require("../shared/utils/redis");
const { getCurrencies } = require("../integrations/currencyApi");

const currencyRepository = new CurrencyRepository();

async function updateCurrencies() {
  console.log("running currency job");
  const currenciesToUpdate = await currencyRepository.getAll();
  const updatedCurrencies = await getCurrencies();

  for await (currency of currenciesToUpdate) {
    const lowercaseCode = currency.code.toLowerCase();

    if (updatedCurrencies.has(lowercaseCode)) {
      await redis.set(
        currency.code,
        JSON.stringify(updatedCurrencies.get(lowercaseCode))
      );
      await currencyRepository.updateByCode(
        currency.code,
        updatedCurrencies.get(lowercaseCode)
      );
    } else {
      await redis.set(currency.code, currency.rate_from_usd);
    }
  }
}

module.exports = { updateCurrencies };
