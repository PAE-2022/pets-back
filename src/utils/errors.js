class HttpError extends Error {
  constructor(status, response, options) {
    super(`${status} ${response}`, options);
  }
}

class NotFoundError extends Error {
  constructor(message, options) {
    super(`404 not found: ${message}`, options);
  }
}

module.exports = { NotFoundError, HttpError };
