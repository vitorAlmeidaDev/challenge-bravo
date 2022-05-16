const router = require("express").Router();
const { addCurrencyController } = require("../useCases/addCurrency");
const { listCurrencyController } = require("../useCases/listCurrency");
const { deleteCurrencyController } = require("../useCases/deleteCurrency");
const { convertCurrencyController } = require("../useCases/convertCurrency");

router.post("/", (req, res) => {
  addCurrencyController.handle(req, res);
});

router.get("/", (req, res) => {
  listCurrencyController.handle(req, res);
});

router.delete("/:code", (req, res) => {
  deleteCurrencyController.handle(req, res);
});

router.get("/rate/:from/:amount/:to", (req, res) => {
  convertCurrencyController.handle(req, res);
});

module.exports = router;
