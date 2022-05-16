const FakeRepository = require("./FakeRepository");
const { getCurrencies } = require("./FakeExternalCurrencyApi");
const FakeCache = require("./FakeCache");

module.exports = { FakeRepository, getCurrencies, FakeCache };
