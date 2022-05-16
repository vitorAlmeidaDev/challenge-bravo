module.exports = class DeleteCurrencyUseCase {
    constructor(currencyRepository, cacheRepository) {
        this.currencyRepository = currencyRepository;
        this.cacheRepository = cacheRepository;
    }

    async execute(currencyCode) {
        await Promise.all([
            this.currencyRepository.deleteByCode(currencyCode),
            this.cacheRepository.del(currencyCode),
        ]);
    }
};
