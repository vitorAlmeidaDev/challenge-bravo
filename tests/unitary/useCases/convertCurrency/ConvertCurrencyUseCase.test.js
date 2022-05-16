const ConvertCurrencyUseCase = require("../../.././../src/modules/currency/useCases/convertCurrency/ConvertCurrencyUseCase");
const { FakeCache, FakeRepository } = require("../../../test-utils");

describe("Convert currency Use Case", () => {
  const fakeRepository = new FakeRepository();
  let sut;
  beforeEach(() => {
    FakeCache.clearCache();
    sut = new ConvertCurrencyUseCase(fakeRepository, FakeCache);
  });

  it("should convert correctly", async () => {
    FakeCache.set("BRL", "5");
    FakeCache.set("USD", "1");

    const response = await sut.execute("BRL", "USD", 100);

    expect(response).toBe(20);
  });

  it("should not convert a currency that is not registered", async () => {
    FakeCache.set("BRL", "5");

    await sut.execute("BRL", "FAKE", 100).catch((err) => {
      expect(err.message).toEqual("Currency not registered: FAKE");
    });
  });
});
