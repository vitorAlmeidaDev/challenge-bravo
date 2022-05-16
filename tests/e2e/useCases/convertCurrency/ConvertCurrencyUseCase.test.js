describe("Covert Currency e2e tests", () => {
  it("should convert from brl to usd correctly", () => {
    global.request
      .get("/currency/rate?from=BRL&to=EUR&amount=100")
      .end((err, res) => {
        console.log(res);
        expect(res.status).toBe(200);
      });
  });

  it("should not convert a not registered currency", () => {
    global.request
      .get("/currency/rate?from=BRL&to=FAKE&amount=100")
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body.message).toBe("Currency not registered: FAKE");
      });
  });
});
