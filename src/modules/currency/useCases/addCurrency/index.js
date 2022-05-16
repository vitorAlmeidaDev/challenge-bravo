const AddCurrencyController = require("./AddCurrencyController");
const AddCurrencyUseCase = require("./AddCurrencyUseCase");
const CurrencyRepository = require("../../database/repository");
const redis = require("../../../../shared/utils/redis");
const { getCurrencies } = require("../../../../integrations/currencyApi");

const currencyRepository = new CurrencyRepository();

const addCurrencyUseCase = new AddCurrencyUseCase(
  currencyRepository,
  redis,
  getCurrencies
);

const addCurrencyController = new AddCurrencyController(addCurrencyUseCase);

module.exports = { addCurrencyController };
