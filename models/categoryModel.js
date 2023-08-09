const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  imageUrl: { type: String },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
