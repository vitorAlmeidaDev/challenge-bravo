module.exports = class AddCurrencyController {
  constructor(addCurrencyUseCase) {
    this.addCurrencyUseCase = addCurrencyUseCase;
  }

  async handle(request, response) {
    const currency = request.body;
    try {
      const res = await this.addCurrencyUseCase.execute(currency);
      response.status(201).json(res);
    } catch (err) {
      console.log(err);
      response.status(err.status).json({ message: err.message });
    }
  }
};
