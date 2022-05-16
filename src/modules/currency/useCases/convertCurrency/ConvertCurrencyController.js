module.exports = class ConvertCurrencyController {
  constructor(convertCurrencyUseCase) {
    this.convertCurrencyUseCase = convertCurrencyUseCase;
  }

  async handle(request, response) {
    const { from, to, amount } = request.params;
    try {
      const res = await this.convertCurrencyUseCase.execute(from, to, amount);
      response.status(200).json(res);
    } catch (err) {
      response.status(err.status || 500).json({ message: err.message });
    }
  }
};
