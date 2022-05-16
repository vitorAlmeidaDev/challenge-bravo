const cron = require("node-cron");
const { currencyCron } = require("../shared/config/environment");
const { updateCurrencies } = require("./currenciesJob");
console.log("initating cron");
cron.schedule(currencyCron.cronExpression, updateCurrencies);
