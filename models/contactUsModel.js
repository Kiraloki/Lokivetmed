const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: {
    type: String,
    required: true,
    default: "unread",
    enum: ["unread", "read"],
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("contact-us", contactSchema);
