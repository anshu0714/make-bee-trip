const ERROR_CODES = require("../constants/errorCodes");

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  const message =
    statusCode === 500
      ? ERROR_CODES.INTERNAL_ERROR.message
      : err.message;

  res.status(statusCode).json({
    success: false,
    message,
    code: err.code || ERROR_CODES.INTERNAL_ERROR.code,
    data: null,
  });
}

module.exports = errorHandler;