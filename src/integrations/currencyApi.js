const axios = require("axios").default;
const { externalapi } = require("../shared/config/environment");
const apiUrl = externalapi.url;

async function getCurrencies() {
  try {
    const {
      data: { usd: updatedCurrencies },
    } = await axios.get(apiUrl);
    return new Map(Object.entries(updatedCurrencies));
  } catch (err) {
    console.error(error);
  }
}

module.exports = { getCurrencies };
