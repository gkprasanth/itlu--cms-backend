const mongoose = require("mongoose");

// All fields are now optional to allow creating extremely minimal menu items.
// Any downstream rendering logic should defensively handle missing/undefined values.
const menuItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    // Optional local fallback image path from the frontend public folder
    fallbackImagePath: {
      type: String,
      required: false,
    },
    categories: {
      type: [String],
      required: false, // May be undefined or empty array
      default: undefined,
    },
  },
  { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
