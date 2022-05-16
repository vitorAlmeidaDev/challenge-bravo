module.exports = class ListCurrencyUseCase {
  constructor(currencyRepository) {
    this.currencyRepository = currencyRepository;
  }

  async execute() {
    return this.currencyRepository.getAll();
  }
};
