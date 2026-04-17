const asyncHandler = require("../../utils/asyncHandler");
const { sendResponse } = require("../../utils/response");
const AppError = require("../../utils/AppError");
const { getTravelData } = require("./travel.service");
const ERROR_CODES = require("../../constants/errorCodes");

const getTravel = asyncHandler(async (req, res) => {
  const { type } = req.query;

  if (!type) {
    throw new AppError(
      ERROR_CODES.TYPE_REQUIRED.message,
      400,
      ERROR_CODES.TYPE_REQUIRED.code,
    );
  }

  const data = getTravelData(type);

  if (!data) {
    throw new AppError(
      ERROR_CODES.INVALID_TYPE.message,
      400,
      ERROR_CODES.INVALID_TYPE.code,
    );
  }

  return sendResponse(res, {
    message: `${type} data fetched successfully`,
    data,
  });
});

module.exports = { getTravel };
