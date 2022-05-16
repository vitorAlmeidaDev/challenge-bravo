const ConvertCurrencyController = require("./ConvertCurrencyController");
const ConvertCurrencyUseCase = require("./ConvertCurrencyUseCase");
const CurrencyRepository = require("../../database/repository");
const redis = require("../../../../shared/utils/redis");

const currencyRepository = new CurrencyRepository();

const convertCurrencyUseCase = new ConvertCurrencyUseCase(
  currencyRepository,
  redis
);

const convertCurrencyController = new ConvertCurrencyController(
  convertCurrencyUseCase
);

module.exports = { convertCurrencyController };
