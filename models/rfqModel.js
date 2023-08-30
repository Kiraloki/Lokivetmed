const mongoose = require("mongoose");

const rfqSchema = new mongoose.Schema({
  description: { type: String, required: true },
  qty: { type: Number, required: true },
  leadTime: { type: String, required: true },
  responseDate: { type: Date, required: true },
  email: { type: String, required: true },
  additionalInformation: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  endUser: { type: String, required: true },
  additional: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("RFQ", rfqSchema);
