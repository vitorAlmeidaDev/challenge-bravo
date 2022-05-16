const router = require("express").Router();

const currencyRoutes = require("../../modules/currency/http");

router.use("/currency", currencyRoutes);

module.exports = router;
