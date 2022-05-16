module.exports = class ListCurrencyController {
  constructor(listCurrencyUseCase) {
    this.listCurrencyUseCase = listCurrencyUseCase;
  }

  async handle(_request, response) {
    try {
      const res = await this.listCurrencyUseCase.execute();
      response.status(200).json(res);
    } catch (err) {
      console.log(err);
      response.status(500).json(err);
    }
  }
};
