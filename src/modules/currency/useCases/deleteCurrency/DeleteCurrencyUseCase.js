const { NotFoundError } = require("../../errors");
module.exports = class DeleteCurrencyUseCase {
  constructor(currencyRepository, cacheRepository) {
    this.currencyRepository = currencyRepository;
    this.cacheRepository = cacheRepository;
  }

  async execute(currencyCode) {
    const [fromDb, fromCache] = await Promise.all([
      this.currencyRepository.deleteByCode(currencyCode),
      this.cacheRepository.del(currencyCode),
    ]);

    if (!fromDb) {
      throw new NotFoundError(`Currency ${currencyCode} not found`);
    }
  }
};
