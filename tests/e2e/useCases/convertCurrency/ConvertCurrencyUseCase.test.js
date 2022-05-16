describe("Covert Currency e2e tests", () => {
  it("should convert from brl to usd correctly", () => {
    global.request.get("/currency/rate/BRL/100/EUR").end((err, res) => {
      expect(res.status).toBe(200);
    });
  });

  it("should not convert a not registered currency", () => {
    global.request.get("/currency/rate/BRL/100/FAKE").end((err, res) => {
      expect(res.status).toBe(404);
      expect(res.body.message).toBe("Currency not registered: FAKE");
    });
  });
});
