const mongoose = require("mongoose");

const searchQuerySchema = new mongoose.Schema({
  query: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SearchQueries", searchQuerySchema);
