const ERROR_CODES = {
  INTERNAL_ERROR: {
    code: "INTERNAL_ERROR",
    message: "Something went wrong",
  },

  TYPE_REQUIRED: {
    code: "TYPE_REQUIRED",
    message: "Type query is required",
  },

  INVALID_TYPE: {
    code: "INVALID_TYPE",
    message: "Invalid travel type",
  },
};

module.exports = ERROR_CODES;
