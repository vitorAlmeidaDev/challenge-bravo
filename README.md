# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="Hurb" width="24" /> Bravo Challenge

## Running the application

1 - Clone the repository

2 - Go to repository directory

3 - Execute the following commands:

```bash
$ cp .env.exemple .env && make up
```

## Tests

To run unit tests:

```bash
$ npm run test:unitary
```

To run e2e tests:

```bash
$ npm run test:e2e
```

To run load test (the application needs to be up):

```bash
$ npm run autocannon
```

## Jobs

The application has a routine that updates all registered currencies every minute, it's possible to change the frequency by editting the following environmet variable: 

 `CURRENCY_CRON_EXPRESSION`

## Routes

GET: `/currency/rate?from={fromCurrency}&to={toCurrency}&amount={amount}`

e.g: `localhost:3300/currency/rate?from=BRL&to=EUR&amount=100`

Response structure:

when status code `200`:

```json
{
  "convertedValue": 18.9839406791134
}
```

when status code `400`:

```json
{
  "message": "Missing parameters"
}
```

when status code `404`:

```json
{
  "message": "Currency not registered: {CURRENCY_CODE}"
}
```

GET: `/currency`

e.g: `localhost:3300/currency`

Response structure:

when status code `200`:

```json
[
  {
    "_id": "6282928e76ad0b3db6e7ac27",
    "code": "USD",
    "created_at": "2022-05-16T18:06:06.683Z",
    "updated_at": "2022-05-16T18:10:02.056Z",
    "__v": 0,
    "rate_from_usd": 1
  },
  {
    "_id": "6282928e76ad0b3db6e7ac2a",
    "code": "BRL",
    "created_at": "2022-05-16T18:06:06.704Z",
    "updated_at": "2022-05-16T18:10:02.059Z",
    "__v": 0,
    "rate_from_usd": 5.059803
  }
]
```

POST: `/currency`

e.g: `localhost:3300/currency`

Body structure:

```json
{
  "code": "USD",
  "rate_from_usd": 1 //Obligatory when currency doesn't really exists
}
```

Response structure:

when status code `201`:

```json
{
  "code": "USD",
  "rate_from_usd": 1,
  "_id": "628294ed76ad0b3db6e7ac77",
  "created_at": "2022-05-16T18:16:13.265Z",
  "updated_at": "2022-05-16T18:16:13.265Z",
  "__v": 0
}
```

when status code `400`:

```json
{
  "message": "rate_from_usd turns obligatory when creating fake currencies"
}
```

when status code `409`:

```json
{
  "message": "Currency {CURRENCY_CODE} already exists"
}
```

DELETE: `/currency/CODE`

e.g: `localhost:3300/BTC`

Response structure:

when status code `204`:

```json
//no content
```

when status code `404`:

```json
{
  "message": "Currency {CODE} not found"
}
```

## Load test

The application supports in average 5k requests per second.
![Load test](./loadtest.jpeg "Load test")

[[English](README.md) | [Portuguese](README.pt.md)]

Build an API, which responds to JSON, for currency conversion. It must have a backing currency (USD) and make conversions between different currencies with **real and live values**.

The API must convert between the following currencies:

- USD
- BRL
- EUR
- BTC
- ETH

Other coins could be added as usage.

Ex: USD to BRL, USD to BTC, ETH to BRL, etc...

The request must receive as parameters: The source currency, the amount to be converted and the final currency.

Ex: `?from=BTC&to=EUR&amount=123.45`

Also build an endpoint to add and remove API supported currencies using HTTP verbs.

The API must support conversion between FIAT, crypto and fictitious. Example: BRL->HURB, HURB->ETH

"Currency is the means by which monetary transactions are effected." (Wikipedia, 2021).

Therefore, it is possible to imagine that new coins come into existence or cease to exist, it is also possible to imagine fictitious coins such as Dungeons & Dragons coins being used in these transactions, such as how much is a Gold Piece (Dungeons & Dragons) in Real or how much is the GTA$1 in Real.

Let's consider the PSN quote where GTA$1,250,000.00 cost R$83.50 we clearly have a relationship between the currencies, so it is possible to create a quote. (Playstation Store, 2021).

Ref:
Wikipedia [Institutional Website]. Available at: <https://pt.wikipedia.org/wiki/Currency>. Accessed on: 28 April 2021.
Playstation Store [Virtual Store]. Available at: <https://store.playstation.com/pt-br/product/UP1004-CUSA00419_00-GTAVCASHPACK000D>. Accessed on: 28 April 2021.

You can use any programming language for the challenge. Below is the list of languages ​​that we here at Hurb have more affinity:

- JavaScript (NodeJS)
- Python
- Go
- Ruby
- C++
- PHP

## Requirements

- Fork this challenge and create your project (or workspace) using your version of that repository, as soon as you finish the challenge, submit a _pull request_.
  - If you have any reason not to submit a _pull request_, create a private repository on Github, do every challenge on the **main** branch and don't forget to fill in the `pull-request.txt` file. As soon as you finish your development, add the user `automator-hurb` to your repository as a contributor and make it available for at least 30 days. **Do not add the `automator-hurb` until development is complete.**
  - If you have any problem creating the private repository, at the end of the challenge fill in the file called `pull-request.txt`, compress the project folder - including the `.git` folder - and send it to us by email.
- The code needs to run on macOS or Ubuntu (preferably as a Docker container)
- To run your code, all you need to do is run the following commands:
  - git clone \$your-fork
  - cd \$your-fork
  - command to install dependencies
  - command to run the application
- The API can be written with or without the help of _frameworks_
  - If you choose to use a _framework_ that results in _boilerplate code_, mark in the README which piece of code was written by you. The more code you make, the more content we will have to rate.
- The API needs to support a volume of 1000 requests per second in a stress test.
- The API needs to include real and current quotes through integration with public currency quote APIs

## Evaluation criteria

- **Organization of code**: Separation of modules, view and model, back-end and front-end
- **Clarity**: Does the README explain briefly what the problem is and how can I run the application?
- **Assertiveness**: Is the application doing what is expected? If something is missing, does the README explain why?
- **Code readability** (including comments)
- **Security**: Are there any clear vulnerabilities?
- **Test coverage** (We don't expect full coverage)
- **History of commits** (structure and quality)
- **UX**: Is the interface user-friendly and self-explanatory? Is the API intuitive?
- **Technical choices**: Is the choice of libraries, database, architecture, etc. the best choice for the application?

## Doubts

Any questions you may have, check the [_issues_](https://github.com/HurbCom/challenge-bravo/issues) to see if someone hasn't already and if you can't find your answer, open one yourself. new issue!

Godspeed! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
