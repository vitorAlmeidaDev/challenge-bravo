const CurrencyModel = require("./schema");

module.exports = class CurrencyRepository {
  async findByCode(code) {
    return CurrencyModel.find({ code });
  }

  async deleteByCode(code) {
    return CurrencyModel.findOneAndRemove({ code });
  }

  async updateByCode(code, rate_from_usd) {
    return CurrencyModel.findOneAndUpdate({ code }, { rate_from_usd });
  }

  async create(currency) {
    return CurrencyModel.create(currency);
  }

  async getAll() {
    return CurrencyModel.find();
  }
};
