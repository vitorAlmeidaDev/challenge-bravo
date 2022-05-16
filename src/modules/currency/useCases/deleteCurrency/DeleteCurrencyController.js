module.exports = class DeleteCurrencyController {
  constructor(deleteCurrencyUseCase) {
    this.deleteCurrencyUseCase = deleteCurrencyUseCase;
  }

  async handle(request, response) {
    const { code } = request.params;
    try {
      await this.deleteCurrencyUseCase.execute(code);
      response.status(204).send();
    } catch (err) {
      console.log(err);
      response.status(err.status || 500).json({ message: err.message });
    }
  }
};
