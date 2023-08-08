const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    description: {
      type: String,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    brand: {
      type: String,
    },
    size_of_instrument: {
      type: [String],
      default: [],
    },
    stage: {
      type: String,
      default: "all stage",
    },
    condition: {
      type: String,
    },
    varieties: {
      type: Schema.Types.ObjectId,
      ref: "Varieties",
    },
    specific_feature: {
      type: String,
    },
    packaging_dimensions: {
      type: String,
    },
    mode_of_administration: {
      type: String,
    },
    caution: {
      type: String,
    },
    material_used: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 1,
    },
    color: [String],
    model_number: {
      type: String,
    },
    dimension_of_the_product: {
      type: String,
    },
    weight_of_the_commodity: {
      type: String,
    },
    MOQ: {
      type: String,
    },
    active_ingredients: {
      type: String,
    },
    country_of_manufacture: {
      type: String,
    },
    lead_time_to_deliver: {
      type: String,
    },
    fda_or_certified: {
      type: String,
    },
    total_primary_packet: {
      type: String,
    },
    primary_packing_Single_hand: {
      type: String,
    },
    prior_prophylactic_preparation: {
      type: String,
    },
    shelflife: {
      type: String,
    },
    lab_instruments: {
      type: String,
    },
    guarantee: {
      type: String,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    dosage_recommended: {
      type: String,
    },
    fast_moving_spare_parts: {
      type: String,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    animal: [
      {
        type: Schema.Types.ObjectId,
        ref: "Animal",
        required: true,
      },
    ],
    treatment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Treatment",
        required: false,
      },
    ],
    dailyEssential: [
      {
        type: Schema.Types.ObjectId,
        ref: "Essential",
        required: false,
      },
    ],
    medicalCare: [
      {
        type: Schema.Types.ObjectId,
        ref: "Medical",
        required: false,
      },
    ],
    faqs: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { minimize: false } // Retains empty objects and arrays in the document
);

module.exports = mongoose.model("Product", ProductSchema);
