const DeleteCurrencyController = require("./DeleteCurrencyController");
const DeleteCurrencyUseCase = require("./DeleteCurrencyUseCase");
const CurrencyRepository = require("../../database/repository");
const redis = require("../../../../shared/utils/redis");

const currencyRepository = new CurrencyRepository();

const deleteCurrencyUseCase = new DeleteCurrencyUseCase(
  currencyRepository,
  redis
);

const deleteCurrencyController = new DeleteCurrencyController(
  deleteCurrencyUseCase
);

module.exports = { deleteCurrencyController };
