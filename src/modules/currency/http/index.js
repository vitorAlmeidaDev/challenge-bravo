const router = require("express").Router();
const { addCurrencyController } = require("../useCases/addCurrency");
const { listCurrencyController } = require("../useCases/listCurrency");

router.post("/", (req, res) => {
  addCurrencyController.handle(req, res);
});

router.get("/", (req, res) => {
  listCurrencyController.handle(req, res);
});

module.exports = router;
