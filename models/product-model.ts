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
    enum: ["Smartphones", "Laptops", "Accessories", "Wearables"],
  },
  description: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
});

export const productModel =
  mongoose.models.products ?? mongoose.model("products", productSchema);
