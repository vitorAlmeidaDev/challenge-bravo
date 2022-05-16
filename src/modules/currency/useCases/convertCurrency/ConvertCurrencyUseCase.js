const NotFoundError = require("../../errors/NotFoundError");
module.exports = class ConvertCurrencyUseCase {
  constructor(currencyRepository, cacheRepository) {
    this.currencyRepository = currencyRepository;
    this.cacheRepository = cacheRepository;
  }

  async execute(from, to, amount) {
    const fromValue = Number(await this.cacheRepository.get(from));
    const toValue = Number(await this.cacheRepository.get(to));
    if (!fromValue || !toValue) {
      const notFound = !fromValue ? from : to;
      throw new NotFoundError(`Currency not registered: ${notFound}`);
    }

    const res = (Number(amount) / fromValue) * toValue;
    return res;
  }
};

//100 from real (100 / valor do dolar) * valor do to
