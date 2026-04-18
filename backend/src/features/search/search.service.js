const Search = require("./search.model");
const { logError } = require("../../utils/logger");

const upsertSearch = async (data) => {
  const { type, from, to, city } = data;

  let query = {};

  if (type === "hotel") {
    if (!city) return;
    query = { type, city };
  } else {
    if (!from || !to) return;
    query = { type, from, to };
  }

  try {
    await Search.findOneAndUpdate(
      query,
      {
        $inc: { count: 1 },
      },
      {
        upsert: true,
        returnDocument: "after",
        setDefaultsOnInsert: true,
      },
    );
  } catch (err) {
    if (err.code === 11000) {
      await Search.findOneAndUpdate(query, {
        $inc: { count: 1 },
      });
    } else {
      logError("Search upsert error:", err.message);
    }
  }
};

const getPopularSearches = async () => {
  return Search.find({ count: { $gt: 0 } })
    .sort({ count: -1 })
    .limit(5)
    .lean();
};

module.exports = {
  upsertSearch,
  getPopularSearches,
};
