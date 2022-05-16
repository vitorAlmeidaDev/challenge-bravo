const AddCurrencyUseCase = require("../../../../src/modules/currency/useCases/addCurrency/AddCurrencyUseCase");

const {
  FakeCache,
  FakeRepository,
  getCurrencies,
} = require("../../../test-utils");

describe("Add currency Use Case", () => {
  const fakeRepository = new FakeRepository();
  let sut;
  beforeEach(() => {
    sut = new AddCurrencyUseCase(fakeRepository, FakeCache, getCurrencies);
  });

  it("Should persist an existing new currency", async () => {
    const currencyToCreate = {
      code: "FKP",
    };

    const response = await sut.execute(currencyToCreate);

    expect(response.code).toBe("FKP");
  });

  it("Should persist a fake new currency", async () => {
    const currencyToCreate = {
      code: "XDD",
      rate_from_usd: 0.8,
    };

    const response = await sut.execute(currencyToCreate);

    expect(response.code).toBe("XDD");
  });

  it("Should not persist a new currency when it's fake and don't provide rate_from_usd", async () => {
    const currencyToCreate = {
      code: "XDD",
    };
    await sut.execute(currencyToCreate).catch((err) => {
      expect(err.message).toBe(
        "rate_from_usd turns obligatory when creating fake currencies"
      );
    });
  });
});
