const asyncHandler = require("../../utils/asyncHandler");
const { sendResponse } = require("../../utils/response");
const { getPopularSearches } = require("./search.service");

const getPopular = asyncHandler(async (req, res) => {
  const data = await getPopularSearches();

  return sendResponse(res, {
    message: "Popular searches fetched successfully",
    data,
  });
});

module.exports = { getPopular };
