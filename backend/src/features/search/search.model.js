const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    from: String,
    to: String,
    city: String,
    count: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true },
);

searchSchema.index(
  { type: 1, from: 1, to: 1, city: 1 },
  { unique: true, sparse: true },
);

module.exports = mongoose.model("Search", searchSchema);
