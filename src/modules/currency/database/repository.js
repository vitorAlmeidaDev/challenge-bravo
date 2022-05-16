const CurrencyModel = require("./schema");
const { AlreadyExistsError } = require("../errors");
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
    try {
      return await CurrencyModel.create(currency);
    } catch (error) {
      if (error.message.includes("duplicate key")) {
        throw new AlreadyExistsError(
          `Currency ${currency.code} already exists`
        );
      }
    }
  }

  async getAll() {
    return CurrencyModel.find();
  }
};
