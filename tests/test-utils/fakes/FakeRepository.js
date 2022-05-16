const { currencies } = require("../mocks/currencyMock");
const currencyMock = new Map(Object.entries(currencies));
module.exports = class CurrencyRepository {
  async findByCode(code) {
    return currencyMock.get(code);
  }

  async deleteByCode(code) {
    return currencyMock.delete(code);
  }

  async updateByCode(code, rate_from_usd) {
    currencyMock.set(code, rate_from_usd);
    return currencyMock.get(code);
  }

  async create(currency) {
    currencyMock.set(currency.code, currency?.rate_from_usd);
    return {
      code: currency.code,
      rate_from_usd: currencyMock.get(currency.code.toLowerCase()),
    };
  }

  async getAll() {
    return Object.fromEntries(currencyMock);
  }
};
