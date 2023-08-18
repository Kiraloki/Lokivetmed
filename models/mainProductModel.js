const mongoose = require("mongoose");

const mainProdcutSchema = new mongoose.Schema({
  name: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MainProdct", mainProdcutSchema);
