import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["AI Tool", "Productivity", "Analytics", "Automation"], // Customize for your products
  },
  description: {
    type: String,
    required: false,
  },
  img: {
    type: String, // URLs or image paths
    required: false,
  },
});

export const productModel =
  mongoose.models.products ?? mongoose.model("products", productSchema);
