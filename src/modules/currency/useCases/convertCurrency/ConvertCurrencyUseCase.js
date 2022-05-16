const { NotFoundError, BadRequestError } = require("../../errors");
module.exports = class ConvertCurrencyUseCase {
  constructor(currencyRepository, cacheRepository) {
    this.currencyRepository = currencyRepository;
    this.cacheRepository = cacheRepository;
  }

  async execute(from, to, amount) {
    if(!from | !to | !amount) {
        throw new BadRequestError('Missing parameters')
    };
    const [fromValue, toValue] = await Promise.all([
      Number(await this.cacheRepository.get(from)),
      Number(await this.cacheRepository.get(to)),
    ]);

    if (!fromValue || !toValue) {
      const notFound = !fromValue ? from : to;
      throw new NotFoundError(`Currency not registered: ${notFound}`);
    }

    const convertedValue = (Number(amount) / fromValue) * toValue;
    return {convertedValue};
  }
};
