require("./memory-mongo");
const request = require("supertest");
const seed = require("../../../src/shared/seed");
const { updateCurrencies } = require("../../../src/jobs/currenciesJob");
const App = require("../../../src/shared/infra/App");
let server;

beforeAll(async () => {
  const app = new App();
  await app.startServer();
  server = app.getServer();
  await seed();
  await updateCurrencies();

  global.request = request(server);
});

afterAll(() => {
  server.close();
});
