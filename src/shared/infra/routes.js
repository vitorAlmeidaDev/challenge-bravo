const router = require("express").Router();

const currencyRoutes = require("../../modules/currency/http");
const healthCheck = require("./healthcheck");

router.use("/currency", currencyRoutes);
router.use("/health", healthCheck);

module.exports = router;
