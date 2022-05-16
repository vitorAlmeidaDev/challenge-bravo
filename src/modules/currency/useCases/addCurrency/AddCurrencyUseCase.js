const { BadRequestError } = require("../../errors");
module.exports = class AddCurrencyUseCase {
  constructor(
    currencyRepository,
    cacheRepository,
    getCurrenciesFromExternalApi
  ) {
    this.currencyRepository = currencyRepository;
    this.cacheRepository = cacheRepository;
    this.getCurrenciesFromExternalApi = getCurrenciesFromExternalApi;
  }

  async execute(currency) {
    let newCurrency;
    const updatedCurrencies = await this.getCurrenciesFromExternalApi();

    if (updatedCurrencies.has(currency.code.toLowerCase())) {
      newCurrency = await this.currencyRepository.create(currency);
      await this.cacheRepository.set(
        currency.code,
        updatedCurrencies.get(currency.code.toLowerCase())
      );
    } else if (!currency.rate_from_usd) {
      throw new BadRequestError(
        "rate_from_usd turns obligatory when creating fake currencies"
      );
    } else {
      newCurrency = await this.currencyRepository.create(currency);
      await this.cacheRepository.set(currency.code, currency.rate_from_usd);
    }

    return newCurrency;
  }
};
