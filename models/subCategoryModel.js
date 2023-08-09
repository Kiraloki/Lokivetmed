const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const subcategorySchema = new mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      trim: true,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },

    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subcategorySchema);
