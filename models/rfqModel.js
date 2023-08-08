const mongoose = require("mongoose");

const rfqSchema = new mongoose.Schema({
  description: String,
  qty: Number,
  leadTime: String,
  responseDate: Date,
  email: String,
  additionalInformation: String,
  phoneNumber: String,
  endUser: String,
  additional: String,
  address: String,
});

module.exports = mongoose.model("RFQ", rfqSchema);
