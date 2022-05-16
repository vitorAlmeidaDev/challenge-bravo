const { currencies } = require("../mocks/currencyMock");
const getCurrencies = async () => {
  const currenciesMock = new Map(Object.entries(currencies));
  return currenciesMock;
};

module.exports = {
  getCurrencies,
};
