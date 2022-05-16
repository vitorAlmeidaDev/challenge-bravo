const router = require("express").Router();
const { addCurrencyController } = require("../useCases/addCurrency");

router.post("/", (req, res) => {
  addCurrencyController.handle(req, res);
});

module.exports = router;
