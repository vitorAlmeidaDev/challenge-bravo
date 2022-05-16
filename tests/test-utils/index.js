const FakeRepository = require("./fakes/FakeRepository");
const { getCurrencies } = require("./fakes/FakeExternalCurrencyApi");
const FakeCache = require("./fakes/FakeCache");

module.exports = { FakeRepository, getCurrencies, FakeCache };
