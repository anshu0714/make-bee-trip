const asyncHandler = require("../../utils/asyncHandler");
const { sendResponse } = require("../../utils/response");
const AppError = require("../../utils/AppError");
const { getTravelData } = require("./travel.service");
const { upsertSearch } = require("../search/search.service");
const ERROR_CODES = require("../../constants/errorCodes");

const getTravel = asyncHandler(async (req, res) => {
  const { type, ...query } = req.query;

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  if (!type) {
    throw new AppError(
      ERROR_CODES.TYPE_REQUIRED.message,
      400,
      ERROR_CODES.TYPE_REQUIRED.code,
    );
  }

  const data = getTravelData(type, query);

  if (!data) {
    throw new AppError(
      ERROR_CODES.INVALID_TYPE.message,
      400,
      ERROR_CODES.INVALID_TYPE.code,
    );
  }

  upsertSearch({ type, ...query });

  return sendResponse(res, {
    message: `${capitalize(type)} data fetched successfully`,
    data,
    meta: {
      count: data.length,
    },
  });
});

module.exports = { getTravel };
