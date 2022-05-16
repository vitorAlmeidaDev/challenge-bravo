const ListCurrencyController = require("./ListCurrencyController");
const ListCurrencyUseCase = require("./ListCurrencyUseCase");
const CurrencyRepository = require("../../database/repository");

const currencyRepository = new CurrencyRepository();

const listCurrencyUseCase = new ListCurrencyUseCase(currencyRepository);

const listCurrencyController = new ListCurrencyController(listCurrencyUseCase);

module.exports = { listCurrencyController };
