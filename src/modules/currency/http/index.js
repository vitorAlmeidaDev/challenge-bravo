const router = require("express").Router();
const {
  addCurrencyController,
  listCurrencyController,
  deleteCurrencyController,
  convertCurrencyController,
} = require("../useCases");

router.post("/", (req, res) => {
  addCurrencyController.handle(req, res);
});

router.get("/", (req, res) => {
  listCurrencyController.handle(req, res);
});

router.delete("/:code", (req, res) => {
  deleteCurrencyController.handle(req, res);
});

router.get("/rate", (req, res) => {
  convertCurrencyController.handle(req, res);
});

module.exports = router;
