class AlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
    this.name = "AlreadyExistsError";
  }
}

module.exports = AlreadyExistsError;
